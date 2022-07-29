import { GrImage} from "react-icons/gr";

export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    icon: GrImage,
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
              source: (doc,path) => 'gallery-'+path.parent.title,
            },
          },
          {
            name: "images",
            type: "array",
            title: "Images",
            of: [{ type: "captionImage" }]
          }         
    ]
}