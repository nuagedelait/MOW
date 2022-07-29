import { useContext } from "react";

import client from "../client";
import imageUrlBuilder from '@sanity/image-url';
import { ConfigContext } from '../components/page';

export default function useImageURL(source, size){

    if(source.url){
        return source.url;
    }

    const config = useContext(ConfigContext);

    if( (size && !config) || !size ){
        return imageUrlBuilder(client).image(source).url()
    }else{
        const resize = config && config.image_sizes && config.image_sizes.find( image_size => {
            return image_size.slug.current === size;
        })        

        if(resize){
            const image = imageUrlBuilder(client)
            .image(source)
            .ignoreImageParams()
            .fit(resize.fit)
            .auto('format')
            .width(resize.width)
            .height(resize.height)

            if(source.hotspot){
                return image.focalPoint(
                    source.hotspot.x,
                    source.hotspot.y
                ).url()
            }else{
                return image.url()
            }
            
            
        }else{
            return imageUrlBuilder(client).image(source).url()
        }
        
    }
    
}