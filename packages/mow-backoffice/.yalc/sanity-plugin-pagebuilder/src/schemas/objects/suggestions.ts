export default {
    name: "pbSuggestion",
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
            name: "filters",
            title: "Filters",
            type: "array",
            of: [
                {
                    name: 'filterCategory',
                    title: 'Category',
                    type: 'reference',
                    to: [{type: 'category'}],
                },
                {
                    name: 'filterTags',
                    title: 'Filter by tags',
                    type: 'object',
                    fields:[
                        {
                            name: "tags",
                            title: "Tags",
                            type: "string"
                        }
                    ],
                    preview:{
                        select: {
                            tags: 'tags'
                        },
                        prepare(selection:any) {
                            return {
                                title: 'Tags / '+ selection.tags ,
                            }
                        }
                    }
                },
                {
                    name: 'filterTerms',
                    title: 'Filter by search terms',
                    type: 'object',
                    fields:[
                        {
                            name: "terms",
                            title: "Search Terms",
                            type: "string"
                        }
                    ],
                    preview:{
                        select: {
                            terms: 'terms'
                        },
                        prepare(selection:any) {
                            return {
                                title: 'Terms / '+ selection.terms ,
                            }
                        }
                    }
                }
            ]
        },
        {
            name: 'maxPosts',
            title: 'Max posts',
            type: 'number'
        },
        {
            name: 'slider',
            title: 'Display as slider',
            type: 'boolean'
        },
        {
            title: 'Group',
            name: 'group',
            type: 'string'
        }
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare(selection:any) {
            return {
                title: 'Suggestion / '+ selection.title ,
            }
        }
    }
}