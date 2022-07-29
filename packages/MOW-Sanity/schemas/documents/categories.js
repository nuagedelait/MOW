export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields : [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Single name',
            name: 'single',
            type: 'string'
        },
        {
            title: 'Plural name',
            name: 'plural',
            type: 'string'
        },
        {
            title: 'Icon',
            name: 'icon',
            type: 'iconpicker'
        },
        {
            title: 'Description',
            name: 'description',
            type: 'richText'
        }
    ]
}