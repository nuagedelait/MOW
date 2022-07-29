export default {
    name: "bloc",
    type: "object",
    title: "Bloc",
    preview: {
        select: {
            title: 'layout',
            slug: 'slug'
        },
        prepare(selection) {
            return {
                title: selection.slug[0].toUpperCase()+ selection.slug.substring(1)  + ' / ' + selection.title,
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
            name: 'layout',
            type: 'string',
            title: 'Disposition',
            description: 'Selectionner une disposition',
            options: {
                list: ['image-gauche', 'image-droite', 'full-image-gauche','full-image-droite']
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
            name: 'content',
            type: 'richText',
            title: 'Content'
        },
        {
            name: 'calltoaction',
            type: 'cta',
            title: 'Call to action'
        },
        {
            name: 'note',
            type: 'string',
            title: 'Note'
        },
        {
            title: 'Images',
            name: 'images',
            type: 'array',
            of: [{type: 'image'}]
        },
        
    ]
}