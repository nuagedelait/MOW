
export interface PrepareProps {
    title:string,
    icon: {
        icon:string
    }
}

export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
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
            title: 'Single name',
            name: 'single',
            type: 'string'
        },
        {
            title: 'Plural name',
            name: 'plural',
            type: 'string'
        },
        /*
        {
            title: 'Icon',
            name: 'icon',
            type: 'iconpicker'
        },*/
        {
            title: 'Description',
            name: 'description',
            type: 'richText'
        }
    ],
    preview: {
        select: {
            title: 'title',
            icon: 'icon'
        },
        prepare(preparePros:PrepareProps) {
            const { title, icon } = preparePros;
            return ({
                title: title,
                media: `<div class="sanity-studio__preview-fallback-icon">${icon.icon}</div>`
            })
        }
    }
}