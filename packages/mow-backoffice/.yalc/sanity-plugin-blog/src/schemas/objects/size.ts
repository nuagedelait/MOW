export default {
    name: 'size',
    title: 'Size',
    type: 'object',
    fields: [
        {
            name: 'slug',
            title: 'Name',
            type: 'slug'
        },
        {
            name: 'width',
            title: 'Width',
            type: 'string'
        },
        {
            name: 'height',
            title: 'Height',
            type: 'string'
        },
        {
            name: 'fit',
            title: 'Fit',
            type: 'string',
            options: {
                list:['clip','crop','min','max','scale']
            }
        }
    ],
    preview: {
        select:{
            title: 'slug.current',
            width: 'width',
            height: 'height'
        },
        prepare({title,width,height}: any){
            return {
                title : title.charAt(0).toUpperCase() + title.slice(1),
                subtitle : `${width}x${height}`
            }
        }
    }
}