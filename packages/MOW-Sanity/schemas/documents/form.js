// Import baseLanguage just to show an example with customizing the slug source
// option
import { i18n } from '../documentTranslation'

export default {
    title: 'Form',
    name: 'form',
    type: 'document',
    i18n,
    preview: {
        select: {
            title: 'title'
        }
    },
    fields: [
        {
            type: 'string',
            name: 'title',
            title: 'Title'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            },
        },
        {
            title: 'Action',
            name: 'action',
            type: 'string',
            description: 'Selectionner une action',
            options: {
                list: ['subscribe','contact']
            }
        },
        {
            name: 'inputs',
            type: 'array',
            title: 'Inputs',
            of: [
                { type: 'input' },
                { type: 'select' },
                { type: 'textarea' },
                { type: 'radio' },
                { type: 'checkbox' },
                { type: 'submit' },
            ]
        }
    ]
}
