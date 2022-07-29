export default {
    name: "radio",
    type: "object",
    title: "Radio",
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'label',
            type: 'string',
            title: 'Label'
        },
        {
            name: 'options',
            type: 'array',
            title: 'Options',
            of: [{ type: 'string' }]
        }
    ]
}