export default {
    name: "pbBanner",
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
            options: {
                hotspot:true
            }
        },
        {
            title: 'Group',
            name: 'group',
            type: 'string'
        }

    ],
    preview: {
        select: {
            slug: 'slug'
        },
        prepare(selection:any) {
            return {
                title: 'Banner / '+ selection.slug[0].toUpperCase()+ selection.slug.substring(1) ,
            }
        }
    },
}