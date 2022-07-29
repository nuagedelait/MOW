export default {
    name: "submit",
    type: "object",
    title: "Submit button",
    preview: {
        select: {
            text: 'text'
        },
        prepare(selection) {
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
        }
    ],
    initialValue: {
        text: 'envoyer'
    }
}