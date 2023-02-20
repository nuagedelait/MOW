
export default {
    title: 'Pagebuilder',
    name: 'pagebuilder',
    type: 'object',
    preview: {
        select: {
            title: 'title',
            media: 'image'
        }
    },
    fields: [
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                { type: 'pbHero' },
                { type: 'pbBloc' },
                { type: 'pbCta' },
                { type: 'pbBanner' },
                { type: 'pbForm' },
                { type: 'pbSuggestion' },
                { type: 'pbMap' },
            ]
        }
    ]
}
