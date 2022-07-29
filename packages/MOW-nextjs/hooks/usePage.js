import client from '../client';

export const usePath = async (type) => {
    const paths = await client.fetch(
        `*[_type == "${type}" && defined(slug.current)][].slug.current`
    )
    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: true,
    }
}

export const useData = async (params, type) => {

    const { slug = "" } = params

    const page = await client.fetch(`
        *[_type == "${type}" && slug.current == $slug][0]
    `, { slug });

    const config = await client.fetch(`
        *[_type == "siteSettings"][0]
    `);

    return {
        props: {
            page,
            config
        }
    }
}