// Import baseLanguage just to show an example with customizing the slug source
// option

import { i18n } from '../documentTranslation'
import {
    GrDomain as PageIcon,
  } from 'react-icons/gr'

export default {
    title: 'Page',
    name: 'page',
    type: 'document',
    i18n,
    groups: [
        {
            name:'content',
            title: 'Page content',
            default: true,
        },
        {
          name: 'seo',
          title: 'SEO',
        },
    ],
    fields: [
        {
            type: 'string',
            name: 'title',
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
            type: 'openGraph',
            name: 'openGraph',
            group: 'seo'
        },
        {
            title: 'Preview',
            type: 'image',
            name: 'preview',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'pageBuilder',
            type: 'pagebuilder',
            title: 'Page builder',
            group: 'content'
        }
    ],
    preview: {
        select: {
            title: 'title',
            media: 'preview',
        },
    },
}
