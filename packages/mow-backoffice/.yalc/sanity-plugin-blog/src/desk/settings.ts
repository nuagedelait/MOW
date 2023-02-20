import {
    ControlsIcon,
    MenuIcon,
    FolderIcon,
    DocumentTextIcon
} from '@sanity/icons';

import { baseLang } from "./constants";

export default (S: any, additionnals:any) => S.list()
    .id('build-level')
    .title('Build')
    .items([
        S.listItem()
            .title('Settings')
            .icon(ControlsIcon)
            .child(
                S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
            ),
        S.listItem()
            .title('Menus')
            .id('menu-docs')
            .icon(MenuIcon)
            .schemaType('menu')
            .child(
                S.documentList()
                    .id('menus')
                    .title('Menus')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "menu" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang })
            ),
        S.listItem()
            .title('Categories')
            .id('cat-docs')
            .icon(FolderIcon)
            .schemaType('category')
            .child(
                S.documentList()
                    .id('category')
                    .title('Category')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "category" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang })
            ),
        S.listItem()
            .title('Forms')
            .id('forms-docs')
            .icon(DocumentTextIcon)
            .schemaType('form')
            .child(
                S.documentList()
                    .id('form')
                    .title('Forms')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "form" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang })
            ),
        additionnals(S)
    ]
)