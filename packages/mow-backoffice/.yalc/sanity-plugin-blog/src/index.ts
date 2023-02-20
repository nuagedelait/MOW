import { definePlugin } from 'sanity'
import { deskTool } from 'sanity/desk'
import structure from './desk'
import schemas from './schemas';
import { visionTool } from '@sanity/vision'

/** @public */
export interface BlogConfig { }

/** @public */
export const Blog = definePlugin<BlogConfig | void>((config = {}) => {

  // eslint-disable-next-line no-console
  console.log('hello from sanity-plugin-blog');

  return {
    name: 'sanity-plugin-blog',
    schema: {
      types: (prev, context) => {
        const hasPageBuilder = prev.filter(type => type.name === 'pagebuilder').length === 1;
        if (hasPageBuilder) {
          return [
            ...schemas.filter(type => type.name !== 'pagebuilder'),
            ...prev
          ]
        } else {
          return [...schemas, ...prev]
        }
      },
    }
  }
})

/** @public */
export const desk = structure