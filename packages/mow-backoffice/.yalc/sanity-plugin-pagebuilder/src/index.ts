import {definePlugin} from 'sanity';
import schemas from './schemas'

/** @public */
export interface PageBuilderConfig {
  /* nothing here yet */
}

/** @public */
export const PageBuilder = definePlugin<PageBuilderConfig | void>((config = {}) => {
  // eslint-disable-next-line no-console
  console.log('hello from sanity-plugin-pagebuilder')
  return {
    name: 'sanity-plugin-pagebuilder',
    schema: {
      types: (prev, context) => {
        const keep = prev.filter( type => type.name !== 'pagebuilder');
        return [...schemas, ...keep]
      },
    }
  }
})
