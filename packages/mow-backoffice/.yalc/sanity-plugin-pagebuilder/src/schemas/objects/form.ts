export default {
    name: "pbForm",
    type: "object",
    title: "Form",
    fields: [
        {
            name: 'Title',
            type: 'string',
        },
        {
            title: 'Form',
            name: 'form',
            description: 'Select form',
            type: 'reference',
            to: [{ type: 'form' }], 
        }, 
        {
            title: 'Group',
            name: 'group',
            type: 'string'
        }
    ]
}