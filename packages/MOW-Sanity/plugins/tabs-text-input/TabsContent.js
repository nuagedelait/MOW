import React, { useEffect, useRef, useState } from 'react'
import { Card, TabList, Tab, TabPanel, TextArea, TextInput, Badge, Text, Heading } from '@sanity/ui'
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent';
import { BlockEditor as Editor } from 'part:@sanity/form-builder';
import config from "config:tabs-text-input";

const TabsContent = React.forwardRef((props, ref) => {

    const panels = props.type.panels ? props.type.panels : (config.panels ? config.panels : []);

    const {
        type,
        value,
        readOnly,
        placeholder,
        markers,
        presence,
        onFocus,
        onBlur,
        onChange,
    } = props


    //TAB swtich handling
    const [currentTab, setCurrentTab] = useState('loved');

    //Save Editors refs
    const editorsRef = useRef([]);

    //Save action delayed for performance
    const time = useRef(null);

    const changeIndex = useRef(0);

    //Check for undefined values
    const initialValues = props.value ? props.value : [];

    panels.forEach((panelConfig, index) => {
        if (!initialValues[index]) {
            if (panelConfig.input === 'richText') {
                initialValues[index] = {
                    type: "richText",
                    title: `Tab ${index}`,
                    value: undefined
                };
            } else {
                initialValues[index] = {
                    type: "richText",
                    title: `Tab ${index}`,
                    value: ''
                };
            }
        }
    })

    //Main State : Array of values
    const [values, setValues] = useState(initialValues);

    //On change update state with new value
    const handleChange = (newValue, valueType, valueIndex) => {
        const newValues = [...values];
        newValues[valueIndex] = {
            type: valueType,
            title: panels[valueIndex].title,
            value: newValue
        };
        setValues(newValues);
        changeIndex.current++;
    }

    //Tab change handling, saving data on switch
    const handleTabChange = (tab) => {
        setCurrentTab(tab);
        onChange(PatchEvent.from(set(values)))
    }

    //Delay saving while typing for performance
    useEffect(() => {
        if (time.current) {
            clearTimeout(time.current);
        };
        time.current = setTimeout(() => {
            onChange(PatchEvent.from(set(values)))
        }, 1000)
        return () => {
            clearTimeout(time.current);
        }
    }, [changeIndex.current]);

    if (panels.length === 0) {
        return (
            <Card padding={4} ref={ref}>
                <Heading>{type.title}</Heading><Badge tone="caution">caution</Badge>
                <p>
                    <Text>No panel found, did you add a "panel" key in your configuration ?</Text>
                </p>
            </Card>
        )
    }

    return (
        <Card padding={4} ref={ref}>
            <TabList space={2}>
                {
                    panels.map((panelConfig, index) => {
                        return <Tab
                            key={index}
                            aria-controls={`${panelConfig.slug}-panel`}
                            id={`${panelConfig.slug}-tab`}
                            label={panelConfig.title}
                            onClick={() => handleTabChange(panelConfig.slug)}
                            selected={currentTab === panelConfig.slug}
                            space={2}
                        />
                    })
                }
            </TabList>

            {
                panels.map((panelConfig, index) => {
                    return <TabPanel
                        key={index}
                        aria-labelledby={`${panelConfig.slug}-tab`}
                        hidden={currentTab !== panelConfig.slug}
                        id={`${panelConfig.slug}-panel`}
                    >
                        <Card border marginTop={2} padding={4} radius={2}>
                            {
                                panelConfig.input === 'text' &&
                                <TextInput
                                    index={index}
                                    {...props}
                                    onChange={(event) => handleChange(event.currentTarget.value, panelConfig.input, index)}
                                    type={type.of[index]}
                                    value={values[index].value ? values[index].value : ''}
                                ></TextInput>
                            }
                            {
                                panelConfig.input === 'textArea' &&
                                <TextArea
                                    index={index}
                                    {...props}
                                    onChange={(event) => handleChange(event.currentTarget.value, panelConfig.input, index)}
                                    type={type.of[index]}
                                    value={values[index].value ? values[index].value : ''}
                                    rows={panelConfig.size}
                                ></TextArea>
                            }
                            {
                                panelConfig.input === 'richText' &&
                                <Editor
                                    ref={el => editorsRef.current[0] = el}
                                    id={index}
                                    type={{
                                        name: 'content',
                                        type: 'array',
                                        title: 'Content',
                                        of: [
                                            {
                                                type: 'block'
                                            }
                                        ]
                                    }}
                                    value={values[index].value}
                                    focusPath={[]}
                                    markers={[]}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onChange={() => handleChange(editorsRef.current[index]._input.editorRef.current.slateInstance.children, panelConfig.input, index)}
                                >

                                </Editor>
                            }

                        </Card>
                    </TabPanel>
                })
            }

        </Card>
    )
}
)

// Create the default export to import into our schema
export default TabsContent