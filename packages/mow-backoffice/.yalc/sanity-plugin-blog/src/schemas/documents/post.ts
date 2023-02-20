export default {
    title: 'Post',
    name: 'post',
    type: 'document',
    i18n: true,
    groups: [
        {
            name: 'organize',
            title: 'Organize',
        },
        {
            name: 'content',
            title: 'Post content',
            default: true
        },
        {
            name: 'gallery',
            title: 'Gallery',
        },
        {
            name: 'map',
            title: 'Map',
        },
    ],
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
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
            title: 'Subtitle / Introduction',
            name: 'subtitle',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        },
        {
            title: 'Cover',
            name: 'cover',
            type: 'image',
            options: {
                hotspot: true
            },
        },
        {
            name: 'body',
            title: 'Post content',
            type: 'array',
            group: 'content',
            of: [
                {
                    type: 'block'
                }
            ]
        },
        {
            title: 'Gallery',
            name: 'gallery',
            type: 'gallery',
            group: 'gallery'
        },
        /*
        {
            title: 'Location',
            name: 'location',
            type: 'location',
            group: 'map'
        },*/
        {
            title: 'Tags',
            name: 'tags',
            group: 'organize',
            type: 'text',
        },
        {
            title: 'Categories',
            name: 'categories',
            group: 'organize',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'category' }],
                    options: {
                        disableNew: true,
                    }
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title',
            media: 'cover',
        }
    }
}
