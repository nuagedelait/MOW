export default {
    name: "hero",
    type: "object",
    title: "Hero Bloc",
    preview: {
        select: {
            title: 'slug'
        },
        prepare(selection) {
            return {
                title: 'Hero / '+selection.title,
            }
        }
    },
    fields: [
        {
            name: 'slug',
            type: 'string',
            title: 'Slug'
        },
        {
            name: 'heading',
            type: 'string',
            title: 'Heading'
        },
        {
            name: 'tagline',
            type: 'string',
            title: 'Tagline'
        },
        {
            name: 'calltoaction',
            type: 'cta',
            title: 'Call to action'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text'
                }
            ]
        }
    ]
}