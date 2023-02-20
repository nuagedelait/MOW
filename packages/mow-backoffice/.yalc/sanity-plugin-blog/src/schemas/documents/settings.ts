export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Site Title',
            type: 'string'
        },
        {
            name: 'logoBig',
            title: 'Logo (big)',
            type: 'image'
        },
        {
            name: 'logoSmall',
            title: 'Logo (small)',
            type: 'image'
        },
        {
            name: 'description',
            title: 'Site Description',
            type: 'text'
        },
        {
            name: 'copyright',
            title: 'Site Copyright',
            type: 'richText'
        },
        {
            name: 'background',
            type: "image",
            title: "Background"
        },
        {
            name: 'image_sizes',
            title: 'Image sizes',
            type: 'array',
            of: [{ type: "size" }]
        },
        {
            name: 'customs',
            title: 'Customs',
            type: 'array',
            of: [{
                type: "object",
                fields: [
                    {
                        name: "key",
                        title: "Key",
                        type: "string"
                    },
                    {
                        name: "value",
                        title: "Value",
                        type: "string"
                    }
                ]

            }]
        }
    ]
}