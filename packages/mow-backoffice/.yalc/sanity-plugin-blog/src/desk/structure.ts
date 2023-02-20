import {
    ControlsIcon,
    DocumentIcon
} from '@sanity/icons';

import settings from './settings';
import documents from './documents';

export default (additionnals: any) => {

    return (S: any) => S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Build')
                .icon(ControlsIcon)
                .child(
                    settings(S, additionnals.settings)
                ),
            S.listItem()
                .title('Documents')
                .icon(DocumentIcon)
                .child(
                    documents(S, additionnals.documents)
                ),
        ])

}