import S from '@sanity/desk-tool/structure-builder'
import * as I18nS from 'sanity-plugin-intl-input/lib/structure';
import { i18n } from './schemas/documentTranslation'

import {
  GrFolder as CatIcon,
  GrMultiple as DocumentIcon,
  GrTextAlignLeft as PostIcon,
  GrSettingsOption as SettingsIcon,
  GrDomain as PageIcon,
  GrMapLocation as MapIcon,
  GrMenu as MenuIcon,
  GrSend as FormIcon
} from 'react-icons/gr'


export const getDefaultDocumentNode = (props) => {
  if (props.schemaType === 'post' || props.schemaType === 'page') {
    return S.document().views(I18nS.getDocumentNodeViewsForSchemaType(props.schemaType));
  }
  return S.document();
};

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Build')
        .icon(SettingsIcon)
        .child(
          S.list()
            .id('build-level')
            .title('Build')
            .items([
              S.listItem()
                .title('Settings')
                .icon(SettingsIcon)
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                ),
              S.listItem()
                .title('Menus')
                .id('menu-docs')
                .icon(MenuIcon)
                .schemaType('navigation')
                .child(
                  S.documentList()
                    .id('navigation')
                    .title('Menus')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "navigation" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'navigation'
                    })
                ),
                S.listItem()
                .title('Categories')
                .id('cat-docs')
                .icon(CatIcon)
                .schemaType('category')
                .child(
                  S.documentList()
                    .id('category')
                    .title('Category')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "category" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'category'
                    })
                ),
                S.listItem()
                .title('Forms')
                .id('forms-docs')
                .icon(FormIcon)
                .schemaType('form')
                .child(
                  S.documentList()
                    .id('form')
                    .title('Forms')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "form" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'form'
                    }),
                ),
              S.listItem()
                .title('Addresses')
                .id('address-docs')
                .icon(MapIcon)
                .schemaType('address')
                .child(
                  S.documentList()
                    .id('address')
                    .title('Address')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "address" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'address'
                    })
                )
            ]
            )
        ),
      S.listItem()
        .title('Documents')
        .icon(DocumentIcon)
        .child(
          S.list()
            .id('doc-level')
            .title('Documents')
            .items([
              S.listItem()
                .title('Posts')
                .id('post-docs')
                .icon(PostIcon)
                .schemaType('post')
                .child(
                  S.documentList()
                    .id('post')
                    .title('Posts')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "post" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'post'
                    })
                ),
              S.listItem()
                .title('Pages')
                .id('page-docs')
                .icon(PageIcon)
                .schemaType('page')
                .child(
                  S.documentList()
                    .id('page')
                    .title('Pages')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "page" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'page'
                    })
                )
            ],
            )
        ),
    ])
