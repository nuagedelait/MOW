import TabsContent from './TabsContent';
export default {
    name: 'tabscontent',
    title: 'Tabs Content',
    type: 'array',
    of: [
        {
            name: 'tabString',
            type: 'object',
            fields: [
                {
                    name:'type',
                    title: 'Type',
                    type: 'string'
                },
                {
                    name:'title',
                    title: 'Title',
                    type: 'string'
                },
                {
                    name:'value',
                    title: 'Value',
                    type: 'string',
                }
            ]
        }, 
        {
            name: 'tabRichText',
            type: 'object',
            fields: [
                {
                    name:'type',
                    title: 'Type',
                    type: 'string'
                },
                {
                    name:'title',
                    title: 'Title',
                    type: 'string'
                },
                {
                    name:'value',
                    title: 'Value',
                    type: 'richText',
                }
            ]
        }
    ],
    inputComponent: TabsContent
}