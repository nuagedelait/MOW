import openGraph from './openGraph';
import pagebuilder from './pagebuilder';
import captionImage from './captionImage';
import nav from './nav';
import size from './size';
import tab from './tab';

export default [
    openGraph,
    pagebuilder,
    captionImage,
    size,
    ...nav,
    tab
]