export default {
    name: "checkbox",
    type: "object",
    title: "Checkbox",
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