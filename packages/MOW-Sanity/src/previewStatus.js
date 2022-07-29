import React from 'react';
import { withDocument } from "part:@sanity/form-builder";
import Preview from "part:@sanity/base/preview";

const PreviewComponent =  (props) => {

    const {
        title,
        media,
        document
    } = props;

    console.log(document);

    return <Preview
        type="image"
        value={{
        title,
        media
        }}
    />
}

export default withDocument(Preview);