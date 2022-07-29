//Hooks
import { usePath, useData } from '../hooks/usePage';

//Components
import Page from '../components/page';
import Pagebuilder from '../components/pagebuilder';

export default ({ page, config }) => {
    return (
        <Page type="page" slug={page.slug.current} config={config}>
            <Pagebuilder blocs={page.pageBuilder.content}></Pagebuilder>
        </Page>
    )
}

export async function getStaticPaths() {
   return usePath('page');
}

export async function getStaticProps(context) {
    return useData(context.params, 'page');
}
