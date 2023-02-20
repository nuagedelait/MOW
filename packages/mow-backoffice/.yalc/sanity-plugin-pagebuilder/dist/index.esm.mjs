import { definePlugin } from 'sanity';
var actions = ["subscribe", "contact", "search"];
var form$1 = {
  title: "Form",
  name: "form",
  type: "document",
  i18n: true,
  preview: {
    select: {
      title: "title"
    }
  },
  fields: [{
    type: "string",
    name: "title",
    title: "Title"
  }, {
    title: "Slug",
    name: "slug",
    type: "slug",
    options: {
      source: "title"
    }
  }, {
    title: "Action",
    name: "action",
    type: "string",
    description: "Selectionner une action",
    options: {
      list: actions
    }
  }, {
    title: "Ajax",
    name: "ajax",
    type: "boolean",
    description: "Pas de redirection"
  }, {
    name: "inputs",
    type: "array",
    title: "Inputs",
    of: [{
      type: "input"
    }, {
      type: "select"
    }, {
      type: "textarea"
    }, {
      type: "radio"
    }, {
      type: "checkbox"
    }, {
      type: "submit"
    }]
  }, {
    title: "Group",
    name: "group",
    type: "string"
  }]
};
var documents = [form$1];
var pagebuilder = {
  title: "Pagebuilder",
  name: "pagebuilder",
  type: "object",
  preview: {
    select: {
      title: "title",
      media: "image"
    }
  },
  fields: [{
    name: "content",
    type: "array",
    title: "Content",
    of: [{
      type: "pbHero"
    }, {
      type: "pbBloc"
    }, {
      type: "pbCta"
    }, {
      type: "pbBanner"
    }, {
      type: "pbForm"
    }, {
      type: "pbSuggestion"
    }, {
      type: "pbMap"
    }]
  }]
};
var banner = {
  name: "pbBanner",
  type: "object",
  title: "Banner",
  fields: [{
    name: "slug",
    type: "string",
    title: "Slug"
  }, {
    name: "layout",
    type: "string",
    title: "Disposition",
    description: "Selectionner une disposition",
    options: {
      list: ["vertical", "horizontal"]
    }
  }, {
    name: "title",
    type: "string",
    title: "Title"
  }, {
    name: "subtitle",
    type: "string",
    title: "Subtitle"
  }, {
    title: "Form",
    name: "form",
    description: "Select form",
    type: "reference",
    to: [{
      type: "form"
    }]
  }, {
    title: "background",
    name: "background",
    type: "image",
    options: {
      hotspot: true
    }
  }, {
    title: "Group",
    name: "group",
    type: "string"
  }],
  preview: {
    select: {
      slug: "slug"
    },
    prepare(selection) {
      return {
        title: "Banner / " + selection.slug[0].toUpperCase() + selection.slug.substring(1)
      };
    }
  }
};
var bloc = {
  name: "pbBloc",
  type: "object",
  title: "Bloc",
  preview: {
    select: {
      title: "layout",
      slug: "slug"
    },
    prepare(selection) {
      return {
        title: selection.slug[0].toUpperCase() + selection.slug.substring(1) + " / " + selection.title
      };
    }
  },
  fields: [{
    name: "slug",
    type: "string",
    title: "Slug"
  }, {
    name: "layout",
    type: "string",
    title: "Disposition",
    description: "Selectionner une disposition",
    options: {
      list: ["default", "image-left", "image-right", "full-image-left", "full-image-right"]
    }
  }, {
    name: "title",
    type: "string",
    title: "Title"
  }, {
    name: "subtitle",
    type: "string",
    title: "Subtitle"
  }, {
    name: "content",
    type: "richText",
    title: "Content"
  }, {
    name: "calltoaction",
    type: "pbCta",
    title: "Call to action"
  }, {
    name: "note",
    type: "string",
    title: "Note"
  }, {
    title: "Images",
    name: "images",
    type: "array",
    of: [{
      type: "image"
    }]
  }, {
    title: "Group",
    name: "group",
    type: "string"
  }]
};
var cta = {
  name: "pbCta",
  type: "object",
  title: "Call to Action",
  fields: [{
    name: "linkText",
    type: "string",
    title: "Link Text"
  }, {
    name: "url",
    type: "string",
    title: "URL"
  }, {
    title: "Group",
    name: "group",
    type: "string"
  }]
};
var form = {
  name: "pbForm",
  type: "object",
  title: "Form",
  fields: [{
    name: "Title",
    type: "string"
  }, {
    title: "Form",
    name: "form",
    description: "Select form",
    type: "reference",
    to: [{
      type: "form"
    }]
  }, {
    title: "Group",
    name: "group",
    type: "string"
  }]
};
var hero = {
  name: "pbHero",
  type: "object",
  title: "Hero Bloc",
  preview: {
    select: {
      title: "slug"
    },
    prepare(selection) {
      return {
        title: "Hero / " + selection.title
      };
    }
  },
  fields: [{
    name: "slug",
    type: "string",
    title: "Slug"
  }, {
    name: "heading",
    type: "string",
    title: "Heading"
  }, {
    name: "tagline",
    type: "string",
    title: "Tagline"
  }, {
    name: "calltoaction",
    type: "pbCta",
    title: "Call to action"
  }, {
    name: "image",
    type: "image",
    title: "Image",
    options: {
      hotspot: true
    },
    fields: [{
      name: "alt",
      type: "string",
      title: "Alternative text"
    }]
  }, {
    title: "Group",
    name: "group",
    type: "string"
  }]
};
var map = {
  name: "pbMap",
  type: "object",
  title: "Map Bloc",
  preview: {
    select: {
      title: "title"
    },
    prepare(selection) {
      return {
        title: "Map / " + selection.title
      };
    }
  },
  fields: [{
    title: "Title",
    name: "title",
    type: "string"
  }, {
    title: "Subtitle",
    name: "subtitle",
    type: "string"
  },
  /*
  {
      name: "sourcemap",
      type: "reference",
      Title: "Map",
      to: [{ type: 'map' }]
  },*/
  {
    title: "Group",
    name: "group",
    type: "string"
  }]
};
var suggestions = {
  name: "pbSuggestion",
  type: "object",
  title: "Suggestions",
  fields: [{
    name: "title",
    title: "Title",
    type: "string"
  }, {
    name: "subtitle",
    title: "Subtitle",
    type: "string"
  }, {
    name: "slug",
    title: "Slug",
    type: "string",
    options: {
      source: "title"
    }
  }, {
    name: "filters",
    title: "Filters",
    type: "array",
    of: [{
      name: "filterCategory",
      title: "Category",
      type: "reference",
      to: [{
        type: "category"
      }]
    }, {
      name: "filterTags",
      title: "Filter by tags",
      type: "object",
      fields: [{
        name: "tags",
        title: "Tags",
        type: "string"
      }],
      preview: {
        select: {
          tags: "tags"
        },
        prepare(selection) {
          return {
            title: "Tags / " + selection.tags
          };
        }
      }
    }, {
      name: "filterTerms",
      title: "Filter by search terms",
      type: "object",
      fields: [{
        name: "terms",
        title: "Search Terms",
        type: "string"
      }],
      preview: {
        select: {
          terms: "terms"
        },
        prepare(selection) {
          return {
            title: "Terms / " + selection.terms
          };
        }
      }
    }]
  }, {
    name: "maxPosts",
    title: "Max posts",
    type: "number"
  }, {
    name: "slider",
    title: "Display as slider",
    type: "boolean"
  }, {
    title: "Group",
    name: "group",
    type: "string"
  }],
  preview: {
    select: {
      title: "title"
    },
    prepare(selection) {
      return {
        title: "Suggestion / " + selection.title
      };
    }
  }
};
var richText = {
  title: "Rich text",
  name: "richText",
  type: "array",
  of: [{
    type: "block"
  }]
};
var checkbox = {
  name: "checkbox",
  type: "object",
  title: "Checkbox",
  fields: [{
    name: "name",
    type: "string",
    title: "Name"
  }, {
    name: "label",
    type: "string",
    title: "Label"
  }, {
    title: "Group",
    name: "group",
    type: "string"
  }, {
    name: "options",
    type: "array",
    title: "Options",
    of: [{
      type: "string"
    }]
  }]
};
var input = {
  name: "input",
  type: "object",
  title: "Text Input",
  fields: [{
    name: "name",
    type: "string",
    title: "Name"
  }, {
    name: "label",
    type: "string",
    title: "Label"
  }, {
    title: "Group",
    name: "group",
    type: "string"
  }, {
    name: "placeholder",
    type: "string",
    title: "Placeholder"
  }, {
    name: "type",
    type: "string",
    title: "Type",
    description: "Choisir un type",
    initialValue: "text",
    options: {
      list: ["color", "date", "email", "hidden", "password", "number", "range", "tal", "text", "url"]
    }
  }]
};
var radio = {
  name: "radio",
  type: "object",
  title: "Radio",
  fields: [{
    name: "name",
    type: "string",
    title: "Name"
  }, {
    name: "label",
    type: "string",
    title: "Label"
  }, {
    title: "Group",
    name: "group",
    type: "string"
  }, {
    name: "options",
    type: "array",
    title: "Options",
    of: [{
      type: "string"
    }]
  }]
};
var select = {
  name: "select",
  type: "object",
  title: "Select",
  fields: [{
    name: "name",
    type: "string",
    title: "Name"
  }, {
    name: "label",
    type: "string",
    title: "Label"
  }, {
    title: "Group",
    name: "group",
    type: "string"
  }, {
    name: "options",
    type: "array",
    title: "Options",
    of: [{
      type: "string"
    }]
  }]
};
var submit = {
  name: "submit",
  type: "object",
  title: "Submit button",
  preview: {
    select: {
      text: "text"
    },
    prepare(selection) {
      return {
        title: "Submit : " + selection.text
      };
    }
  },
  fields: [{
    name: "text",
    type: "string",
    title: "Text"
  }, {
    title: "Group",
    name: "group",
    type: "string"
  }],
  initialValue: {
    text: "envoyer"
  }
};
var textarea = {
  name: "textarea",
  type: "object",
  title: "Long Text Input",
  fields: [{
    name: "name",
    type: "string",
    title: "Name"
  }, {
    name: "label",
    type: "string",
    title: "Label"
  }, {
    title: "Group",
    name: "group",
    type: "string"
  }, {
    name: "placeholder",
    type: "string",
    title: "Placeholder"
  }]
};
var inputs = [checkbox, input, radio, select, submit, textarea];
var objects = [pagebuilder, banner, bloc, cta, form, hero, map, suggestions, richText, ...inputs];
var schemas = [...documents, ...objects];
const PageBuilder = definePlugin(function () {
  let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  console.log("hello from sanity-plugin-pagebuilder");
  return {
    name: "sanity-plugin-pagebuilder",
    schema: {
      types: (prev, context) => {
        const keep = prev.filter(type => type.name !== "pagebuilder");
        return [...schemas, ...keep];
      }
    }
  };
});
export { PageBuilder };
//# sourceMappingURL=index.esm.mjs.map
