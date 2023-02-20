import { PinIcon } from '@sanity/icons';

export default {
    name: 'menu',
    title: 'Menu',
    type: 'document',
    i18n: true,
    icon:  PinIcon,
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
        },
        {
            name: 'navId',
            type: 'slug',
            title: "Navigation Id",
            options: {
                source: 'title',
            },
        },
        {
            name: "items",
            type: "array",
            title: "Navigation items",
            of: [{ type: "navigationItem" }]
        }
    ]
}