import sanityClient from '@sanity/client'

export default sanityClient({
    apiVersion: '2021-10-21', // use a UTC date string
    projectId: 'xhrri5lt', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    useCdn: true // `false` if you want to ensure fresh data
})