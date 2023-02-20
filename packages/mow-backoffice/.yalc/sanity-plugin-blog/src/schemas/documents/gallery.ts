import { ImageIcon } from '@sanity/icons'

export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  icon: ImageIcon,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: 'slug',
      type: 'slug',
      title: "Slug",
      options: {
        source: (doc:any, path:any) => 'gallery-' + path.parent.title,
      },
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [{ type: "captionImage" }]
    },
    {
      title: 'Group',
      name: 'group',
      type: 'string'
    }
  ]
}