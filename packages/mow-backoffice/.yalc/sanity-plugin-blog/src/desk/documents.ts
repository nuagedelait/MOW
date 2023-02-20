import {
    DocumentIcon,
    ComposeIcon
} from '@sanity/icons';

import { baseLang } from "./constants";
import addresses from './addresses';

export default (S: any, additionnals:any) => S.list()
    .id('doc-level')
    .title('Documents')
    .items([
        S.listItem()
            .title('Posts')
            .id('post-docs')
            .icon(DocumentIcon)
            .schemaType('post')
            .child(
                S.documentList()
                    .id('post')
                    .title('Posts')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "post" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang })
            ),
        S.listItem()
            .title('Pages')
            .id('page-docs')
            .icon(ComposeIcon)
            .schemaType('page')
            .child(
                S.documentList()
                    .id('page')
                    .title('Pages')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "page" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang })
            ),
    ...addresses(S)
    ],
    )