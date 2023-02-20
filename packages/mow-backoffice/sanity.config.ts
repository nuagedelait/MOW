import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas';
import { Sections, desk as sectionsDesk } from 'sanity-plugin-sections'
import { Blog, desk as blogDesk} from 'sanity-plugin-blog';
import { PageBuilder } from 'sanity-plugin-pagebuilder';

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',
  projectId: 'lebqwk4h',
  dataset: 'production',

  plugins: [
    deskTool({ structure: blogDesk(sectionsDesk.additionnals) }), 
    visionTool(), 
    Blog(), 
    PageBuilder(), 
    Sections()],

  schema: {
    types: schemaTypes,
  },
})
