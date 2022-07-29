export default {
    name: "suggestion",
    type: "object",
    title: "Suggestions",
    fields : [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'string',
            options: {
                source: 'title',
            }
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{type: 'category'}],
        },
        {
            name: 'sort',
            title: 'Sort',
            type: 'string',
            options: {
                list: ['hotels','natures','cartes postales']
            }
        },
        {
            name: 'search',
            title: 'Search',
            type: 'boolean'
        }
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare(selection) {
            return {
                title: 'Suggestion / '+ selection.title ,
            }
        }
    }
}