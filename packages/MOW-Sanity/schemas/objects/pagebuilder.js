
export default {
    title: 'Pagebuilder',
    name: 'pagebuilder',
    type: 'object',
    preview: {
        select: {
            title: 'title',
            media: 'image'
        }
    },
    fields: [
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                { type: 'hero' },
                { type: 'bloc' },
                { type: 'cta' },
                { type: 'banner' },
                { type: 'form' },
                { type: 'suggestion' },
            ]
        }
    ]
}
