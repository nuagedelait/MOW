import {
    PinIcon,
} from '@sanity/icons';

import { baseLang } from "./constants"

export default (S: any) => {
    const availableTypes = S.context.schema._original.types;
    const hasAddress = availableTypes.filter((type: any) => type.name === 'address').length === 1;
    if (hasAddress) {
        return [
            S.listItem()
                .title('Addresses')
                .id('address-docs')
                .icon(PinIcon)
                .schemaType('address')
                .child(
                    S.documentList()
                        .id('address')
                        .title('Address')
                        // Use a GROQ filter to get documents.
                        .filter('_type == "address" && (!defined(_lang) || _lang == $baseLang)')
                        .params({ baseLang })
                ),
            S.listItem()
                .title('Maps')
                .id('maps-docs')
                .icon(PinIcon)
                .schemaType('map')
                .child(
                    S.documentList()
                        .id('maps')
                        .title('Maps')
                        // Use a GROQ filter to get documents.
                        .filter('_type == "map" && (!defined(_lang) || _lang == $baseLang)')
                        .params({ baseLang })
                )
        ]
    } else {
        return []
    }


}