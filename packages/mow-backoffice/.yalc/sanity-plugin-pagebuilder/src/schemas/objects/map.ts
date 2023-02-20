export default {
    name: "pbMap",
    type: "object",
    title: "Map Bloc",
    preview: {
        select: {
            title: 'title'
        },
        prepare(selection:any) {
            return {
                title: 'Map / '+selection.title,
            }
        }
    },
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Subtitle',
            name: 'subtitle',
            type: 'string'
        },
        /*
        {
            name: "sourcemap",
            type: "reference",
            Title: "Map",
            to: [{ type: 'map' }]
        },*/
        {
            title: 'Group',
            name: 'group',
            type: 'string'
        }
    ]
}