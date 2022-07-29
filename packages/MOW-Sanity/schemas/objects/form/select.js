export default {
    name: "select",
    type: "object",
    title: "Select",
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