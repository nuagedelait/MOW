import { i18n } from '../documentTranslation';

export default {
    title: 'Post',
    name: 'post',
    type: 'document',
    i18n,
    groups: [
        {
            name: 'content',
            title: 'Post content',
            default:true
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
            type: 'tabscontent',
            group: 'content',
        },
        {
            title: 'Gallery',
            name: 'gallery',
            type: 'gallery',
            group: 'gallery'
        },
        {
            title: 'Location',
            name: 'location',
            type: 'location',
            group: 'map'
        }
    ],
    preview: {
        select: {
            title: 'title',
            media: 'cover',
        }
    }
}
