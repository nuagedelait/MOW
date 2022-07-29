import React, { useState } from 'react'
import { Card, TabList, Tab, TabPanel} from '@sanity/ui';
import styles from './style.css'

import * as grIcons from 'react-icons/gr';
import * as faIcons from 'react-icons/fa';
import * as hiIcons from "react-icons/hi";
import * as mdIcons from "react-icons/md";
import * as wiIcons from "react-icons/wi";
import * as ioIcons from "react-icons/io";

const icons = {
    'Grommet':grIcons,
    'Font Awesome': faIcons,
    'Heroicons': hiIcons,
    'Material Design': mdIcons,
    'Weather': wiIcons,
    'Ionicons': ioIcons
}
const IconPicker = React.forwardRef((props, ref) => {

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
    } = props;

    const groups = Object.keys(icons);

    const [currentTab, setCurrentTab] = useState(groups[0]);

    const handleTabChange = (groupkey) => {
        setCurrentTab(groupkey)
    }

    return (
        <Card padding={4} ref={ref}>
            <TabList space={2}>
                {
                    groups.map( (groupkey,index) => {
                        return <Tab
                            key={index}
                            aria-controls={`${groupkey}-panel`}
                            id={`${groupkey}-tab`}
                            label={groupkey}
                            onClick={() => handleTabChange(groupkey)}
                            selected={currentTab === groupkey}
                            space={1}
                        />
                    })
                }
            </TabList>
            {
                groups.map( (groupkey,index) => {

                    const groupIcons = Object.keys(icons[groupkey])

                    return <TabPanel
                        key={index}
                        aria-labelledby={`${groupkey}-tab`}
                        hidden={currentTab !== groupkey}
                        id={`${groupkey}-panel`}
                    >
                        {
                            groupIcons.map( (iconName, subindex) => {
                                return <div className={styles.gridIcons}>
                                    {
                                        icons[groupkey][iconName]()
                                    }
                                </div>
                            })
                        }
                    </TabPanel>

                })
            }
        </Card>
    )
}
)

// Create the default export to import into our schema
export default IconPicker