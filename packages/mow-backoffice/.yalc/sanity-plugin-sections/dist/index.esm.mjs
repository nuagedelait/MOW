var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import { useClient, BlockEditor, set, unset, definePlugin } from 'sanity';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { TabList, Tab, TabPanel, Card, TextArea, Stack, Spinner, Text, Flex, Badge, Heading } from '@sanity/ui';
import { useMemo, useState, useEffect, useCallback, useRef } from 'react';
import groq from 'groq';
import { nanoid } from 'nanoid';
var sectionssettings = {
  name: "sectionssettings",
  title: "Sections Settings",
  type: "document",
  fields: [{
    name: "title",
    title: "Title",
    type: "string",
    initialValue: "Sections settings",
    hidden: true
  }, {
    name: "enabletabs",
    title: "Enable Tabs",
    type: "boolean"
  }, {
    name: "sections",
    title: "Sections",
    type: "array",
    of: [{
      name: "Sections",
      type: "object",
      fields: [{
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: (doc, options) => {
            const key = options.parent._key;
            return doc.sections.find(section => section._key === key).title;
          },
          maxLength: 200
        }
      }, {
        name: "title",
        title: "Title",
        type: "string"
      }, {
        name: "type",
        title: "Content type",
        type: "string",
        options: {
          list: [{
            title: "Simple Text",
            value: "text"
          }, {
            title: "Rich Text",
            value: "richText"
          }],
          layout: "radio"
        }
      }]
    }]
  }]
};
var documents = [sectionssettings];
function useVersionedClient() {
  const client = useClient({
    apiVersion: "2022-10-01"
  });
  return useMemo(() => client.withConfig({
    apiVersion: "2022-10-01"
  }), [client]);
}
var useSectionsSettings = () => {
  const client = useVersionedClient();
  const [settings, setSettings] = useState(null);
  useEffect(() => {
    if (client) {
      client.fetch(groq(_templateObject || (_templateObject = _taggedTemplateLiteral(["*[_type==\"sectionssettings\"]"])))).then(data => {
        if (data && data.length > 0) {
          const result = {
            enabletabs: data[0].enabletabs,
            sections: data[0].sections.map(section => ({
              title: section.title,
              type: section.type,
              slug: section.slug.current,
              initialValue: {
                subtitle: "",
                value: section.type === "text" ? "" : void 0
              }
            })),
            title: data[0].title
          };
          setSettings(result);
        } else {
          setSettings(null);
        }
      });
    }
  }, [client]);
  return settings;
};
const Sections$1 = props => {
  const {
    onChange,
    schemaType,
    onFocus,
    onBlur,
    initialValue,
    settings
  } = props;
  const sectionsSchema = schemaType.fields.find(field => field.name === "content");
  const editorSchema = sectionsSchema.type.of.find(field => field.name === "SectionRichText").fields.find(field => field.name === "content");
  const getEditorProps = useCallback(index => ({
    ...props,
    elementProps: {
      id: "PTE-".concat(index),
      ref: currentPTE,
      onFocus,
      onBlur
    },
    members: [],
    path: [],
    focusPath: [],
    onPathFocus: () => {},
    id: "PTE-".concat(index),
    schemaType: editorSchema,
    onItemAppend: () => {},
    onItemPrepend: () => {},
    onItemRemove: () => {},
    onItemMove: () => {},
    onInsert: () => {},
    resolveInitialValue: async () => ({}),
    resolveUploader: () => null,
    onUpload: () => {},
    onItemCollapse: () => {},
    onItemExpand: () => {},
    onItemOpen: () => {},
    onItemClose: () => {},
    renderField: () => /* @__PURE__ */jsx(Fragment, {}),
    renderInput: () => /* @__PURE__ */jsx(Fragment, {}),
    renderItem: () => /* @__PURE__ */jsx(Fragment, {}),
    renderPreview: () => /* @__PURE__ */jsx(Fragment, {}),
    renderDefault: () => /* @__PURE__ */jsx(Fragment, {}),
    level: 0,
    validation: () => {},
    changed: () => {}
  }), []);
  const [values, setValues] = useState(Array.isArray(initialValue) ? initialValue : []);
  const [currentTab, setCurrentTab] = useState(0);
  const time = useRef(null);
  const changeIndex = useRef(0);
  const handleChange = (target, newValue, valueType, valueIndex) => {
    if (settings) {
      const newValues = [...values];
      settings.sections.forEach((section, index) => {
        if (!newValues[index]) {
          newValues[index] = {
            type: section.type === "text" ? "text" : "richText",
            subtitle: section.initialValue.subtitle,
            value: section.initialValue.value,
            _key: nanoid()
          };
        }
        if (!newValues[index]._key) {
          newValues[index]._key = nanoid();
        }
      });
      newValues[valueIndex] = {
        type: valueType === "text" ? "text" : "richText",
        subtitle: settings.sections[valueIndex].title,
        value: newValue,
        _key: target && target._key ? target._key : nanoid()
      };
      setValues(newValues);
      changeIndex.current++;
    }
  };
  const handleTabChange = tab => {
    setCurrentTab(tab);
    onChange(values);
  };
  useEffect(() => {
    if (time.current) {
      clearTimeout(time.current);
    }
    if (changeIndex.current > 0) {
      time.current = setTimeout(() => {
        onChange(values);
      }, 1e3);
    }
    return () => {
      if (time.current) {
        clearTimeout(time.current);
      }
    };
  }, [changeIndex.current]);
  const currentPTE = useRef(null);
  return /* @__PURE__ */jsxs(Fragment, {
    children: [/* @__PURE__ */jsx(TabList, {
      space: 2,
      children: settings.sections.map((sectionConfig, index) => {
        return /* @__PURE__ */jsx(Tab, {
          "aria-controls": "".concat(sectionConfig.slug, "-panel"),
          id: "".concat(sectionConfig.slug, "-tab"),
          label: sectionConfig.title,
          onClick: () => handleTabChange(index),
          selected: currentTab === index
        }, index);
      })
    }), settings.sections.map((sectionConfig, index) => {
      return /* @__PURE__ */jsx(TabPanel, {
        "aria-labelledby": "".concat(sectionConfig.slug, "-tab"),
        hidden: currentTab !== index,
        id: "".concat(sectionConfig.slug, "-panel"),
        children: /* @__PURE__ */jsxs(Card, {
          border: true,
          marginTop: 2,
          padding: 4,
          radius: 2,
          children: [sectionConfig.type === "text" && /* @__PURE__ */jsx(TextArea, {
            onChange: event => {
              handleChange(values[index], event.currentTarget.value, sectionConfig.type, index);
            },
            type: sectionsSchema.type.of[index],
            value: values[index] ? values[index].value : "",
            rows: 10
          }), sectionConfig.type === "richText" && /* @__PURE__ */jsx(BlockEditor, {
            ...getEditorProps(index),
            onChange: patchData => {
              handleChange(values[index], void 0, sectionConfig.type, index);
            },
            value: values[index].value ? values[index].value : void 0
          })]
        })
      }, index);
    })]
  });
};
const SectionsContent = props => {
  const {
    elementProps,
    onChange,
    schemaType,
    value = "",
    onFocus,
    onBlur
  } = props;
  const settings = useSectionsSettings();
  console.log("receivedValues :", value);
  const handleChange = values => {
    console.log("newValues :", values);
    onChange(values.length > 0 ? set({
      usetabs: settings ? settings.enabletabs : false,
      content: values
    }) : unset());
  };
  if (!settings) {
    return /* @__PURE__ */jsx(Stack, {
      children: /* @__PURE__ */jsx(Card, {
        padding: 2,
        children: /* @__PURE__ */jsxs(Stack, {
          children: [/* @__PURE__ */jsx(Spinner, {
            muted: true
          }), /* @__PURE__ */jsx(Text, {
            children: "Loading Settings"
          })]
        })
      })
    });
  }
  if (settings && settings.sections.length === 0) {
    return /* @__PURE__ */jsxs(Stack, {
      children: [/* @__PURE__ */jsx(Card, {
        children: /* @__PURE__ */jsxs(Flex, {
          children: [/* @__PURE__ */jsx(Card, {
            padding: 2,
            children: /* @__PURE__ */jsx(Badge, {
              tone: "caution",
              children: "caution"
            })
          }), /* @__PURE__ */jsx(Card, {
            padding: 2,
            children: /* @__PURE__ */jsx(Heading, {
              as: "h5",
              size: 1,
              children: "Sections plugin"
            })
          })]
        })
      }), /* @__PURE__ */jsx(Card, {
        padding: 2,
        children: /* @__PURE__ */jsx(Text, {
          children: "No section found, you should configure the module first"
        })
      })]
    });
  }
  return /* @__PURE__ */jsx(Fragment, {
    children: /* @__PURE__ */jsxs(Stack, {
      children: [/* @__PURE__ */jsx(Card, {
        padding: 2,
        children: /* @__PURE__ */jsxs(Flex, {
          align: "center",
          children: [/* @__PURE__ */jsx(Text, {
            size: 2,
            style: {
              paddingRight: "0.5em"
            },
            children: "Tabs mode is "
          }), /* @__PURE__ */jsx(Badge, {
            tone: settings.enabletabs ? "positive" : "critical",
            children: settings.enabletabs ? "enable" : "disable"
          })]
        })
      }), /* @__PURE__ */jsx(Card, {
        padding: 2,
        children: /* @__PURE__ */jsx(Sections$1, {
          settings,
          ...props,
          onChange: handleChange,
          initialValue: value.content
        })
      })]
    })
  });
};
var sectionscontent = {
  name: "sectionscontent",
  title: "Sections Content",
  type: "object",
  fields: [{
    name: "usetabs",
    title: "Use tabs",
    type: "boolean",
    hidden: true
  }, {
    name: "content",
    title: "Content",
    type: "array",
    of: [{
      name: "SectionString",
      type: "object",
      fields: [{
        name: "type",
        title: "Type",
        type: "string"
      }, {
        name: "subtitle",
        title: "Subtitle",
        type: "string"
      }, {
        name: "content",
        title: "Content",
        type: "string"
      }]
    }, {
      name: "SectionRichText",
      type: "object",
      fields: [{
        name: "type",
        title: "Type",
        type: "string"
      }, {
        name: "subtitle",
        title: "Subtitle",
        type: "string"
      }, {
        name: "content",
        title: "Content",
        type: "array",
        of: [{
          type: "block"
        }]
      }]
    }]
  }],
  components: {
    input: SectionsContent
  }
};
var objects = [sectionscontent];
var schemas = [...documents, ...objects];
var additionnals = {
  settings: S => {
    return S.listItem().title("Sections").id("sections-settings").child(S.document().schemaType("sectionssettings").documentId("sectionssettings").title("Sections settings"));
  }
};
const Sections = definePlugin(function () {
  let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    targets: ["post"]
  };
  console.log("sanity-plugin-section loaded");
  return {
    name: "sanity-plugin-sections",
    schema: {
      types: (prev, context) => {
        config.targets.forEach((targetType, index) => {
          const target = prev.findIndex(type => type.name === targetType);
          if (target > -1) {
            const fieldIndex = prev[target].fields.findIndex(field => field.name === "body");
            if (fieldIndex > -1) {
              const {
                of,
                ...rest
              } = prev[target].fields[fieldIndex];
              prev[target].fields[fieldIndex] = {
                ...rest,
                type: "sectionscontent"
              };
            }
          }
        });
        return [...schemas, ...prev];
      }
    }
  };
});
const desk = {
  additionnals
};
export { Sections, desk };
//# sourceMappingURL=index.esm.mjs.map
