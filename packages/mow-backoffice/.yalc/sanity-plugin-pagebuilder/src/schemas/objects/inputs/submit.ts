export default {
    name: "submit",
    type: "object",
    title: "Submit button",
    preview: {
        select: {
            text: 'text'
        },
        prepare(selection:any) {
            return {
                title: 'Submit : '+selection.text,
            }
        }
    },
    fields: [
        {
            name: 'text',
            type: 'string',
            title: 'Text'
        },
        {
            title: 'Group',
            name: 'group',
            type: 'string'
        }
    ],
    initialValue: {
        text: 'envoyer'
    }
}