export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Site Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Site Description',
            type: 'text'
        },
        {
            name: 'background',
            type: "image",
            title: "Background"
        },
        {
            name:'image_sizes',
            title: 'Image sizes',
            type:'array',
            of:[{ type: "size" }]
        }
    ]
}