export default {
    name: "banner",
    type: "object",
    title: "Banner",
    fields: [
        {
            name: 'slug',
            type: 'string',
            title: 'Slug'
        },
        {
            name: 'layout',
            type: 'string',
            title: 'Disposition',
            description: 'Selectionner une disposition',
            options: {
                list: ['vertical','horizontal']
            }
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'subtitle',
            type: 'string',
            title: 'Subtitle'
        },
        {
            title: 'Form',
            name: 'form',
            description: 'Select form',
            type: 'reference',
            to: [{ type: 'form' }], 
        },
        {
            title: 'background',
            name: 'background',
            type: 'image',
        },
    ],
    preview: {
        select: {
            slug: 'slug'
        },
        prepare(selection) {
            return {
                title: 'Banner / '+ selection.slug[0].toUpperCase()+ selection.slug.substring(1) ,
            }
        }
    },
}