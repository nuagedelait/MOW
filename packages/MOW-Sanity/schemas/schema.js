import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import { translateFields } from './fieldTranslation';

//PAGES
import post from './documents/post';
import page from './documents/page';

//SEO
import richText from './objects/richText';
import openGraph from './objects/openGraph';
import captionImage from './objects/captionImage';

//PAGE BUILDER
import pagebuilder from './objects/pagebuilder';
import banner from './objects/pagebuilder/banner';
import bloc from './objects/pagebuilder/bloc';
import cta from './objects/pagebuilder/cta';
import hero from './objects/pagebuilder/hero';
import suggestions from './objects/pagebuilder/suggestions';


import gallery from './documents/gallery';

//MENUS
import navigation from './documents/navigation';
import navItem from './objects/navItem';
import link from './objects/link';

//FORMS
import form from './documents/form';
import input from './objects/form/input';
import textarea from './objects/form/textarea';
import select from './objects/form/select';
import radio from './objects/form/radio';
import checkbox from './objects/form/checkbox';
import submit from './objects/form/submit';


//MAP
import address from './documents/address';
import location from './objects/location';
import advGeopoint from './objects/advGeopoint';
import place from './objects/place';

//SETTINGS
import size from './objects/size';
import siteSettings from './documents/settings';
import categories from './documents/categories';


const createType = (type) => {
  return {
    name:type,
    slug:type,
    title:type,
    type: "document",
    fields: [
      {
        name:"test",
        slug:"test",
        type:"string"
      }
    ]
  }
}

export default createSchema({
  name: 'default',
  types: schemaTypes
    .concat([
      // Any base object you've defined,
      // or document type that should not have
      // field-level validations
      post, 
      page,
      richText,
      openGraph,
      captionImage,
      bloc,
      hero,
      cta,
      navigation,
      navItem,
      link,
      siteSettings,
      form,
      input,
      textarea,
      select,
      radio,
      checkbox,
      submit,
      banner,
      pagebuilder,
      gallery,
      address,
      location,
      advGeopoint,
      place,
      size,
      suggestions,
      categories
    ])
    // Include documents with field translation support.
    // This changes their structure, transforming
    // simple fields like 'string' into 'object'
    // with multiple string properties, one per
    // language.
    //
    // Any document definition that does
    // not set localize: true on root level, or
    // set localize: true on any field level will
    // not be changed.
    .concat(translateFields([
      
    ]))
})
