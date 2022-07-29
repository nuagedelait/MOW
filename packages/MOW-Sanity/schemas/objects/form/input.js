export default {
    name: "input",
    type: "object",
    title: "Text Input",
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
            name: 'placeholder',
            type: 'string',
            title: 'Placeholder'
        },
        {
            name: 'type',
            type: 'string',
            title: 'Type',
            description:'Choisir un type',
            initialValue: 'text',
            options:{
                list: [
                    'color',
                    'date',
                    'email',
                    'hidden',
                    'password',
                    'number',
                    'range',
                    'tal',
                    'text',
                    'url'
                ]
            }
        },
    ],
}