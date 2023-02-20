import { actions } from '../constants';

export default {
    title: 'Form',
    name: 'form',
    type: 'document',
    i18n: true,
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
                list: actions
            }
        },
        {
            title: 'Ajax',
            name: 'ajax',
            type: 'boolean',
            description: 'Pas de redirection'
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
        },
        {
            title: 'Group',
            name: 'group',
            type: 'string'
        }
    ]
}
