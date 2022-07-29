//Hooks
import { usePath, useData } from '../../hooks/usePage';

//Components
import Page from '../../components/page';
import Post from '../../components/post'

export default ({ page, config }) => {

    return (
        <Page type="post" slug={page.slug.current} config={config}>
                <Post data={page}></Post>
        </Page>
    )
}

export async function getStaticPaths() {
   const paths =  usePath('post');
   return paths;
}

export async function getStaticProps(context) {
    const props = useData(context.params, 'post');

    return props;
}
