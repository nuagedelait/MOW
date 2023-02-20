export default {
    name: "pbHero",
    type: "object",
    title: "Hero Bloc",
    preview: {
        select: {
            title: 'slug'
        },
        prepare(selection:any) {
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
            type: 'pbCta',
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
        },
        {
            title: 'Group',
            name: 'group',
            type: 'string'
        }
    ]
}