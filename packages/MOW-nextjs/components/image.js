import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge'
import PropTypes from "prop-types";
import Image from 'next/image';

import useImageURL from '../hooks/useImageURL';

const getReference = (src) => {
    return src._key ? src._key : (src._ref ? src._ref : src);
}

const ImageComponent = (props) => {

    const {
        name,
        src,
        background,
        height,
        width,
        className: classes,
        size,
        onLoad
    } = props;

    const [source, setSource] = useState(null);
    const [hotspot,setHotspot] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const image = useRef();
    const imageRef = useRef(null);

    const imageUrl = useImageURL(src, size);

    useEffect( () => {
        if (source && imageUrl !== source) {
            setLoaded(false);
        }
    },[imageUrl])

    const onLoadComplete = () => {
        setLoaded(true);
        setSource(imageUrl);
        setHotspot(src.hotspot);
        if (onLoad) {
            onLoad();
        }
    }

    useEffect(() => {
        if (image.current && image.current.complete) {
            onLoadComplete();
        }
    }, [])

    const handleLoad = () => {
        onLoadComplete();
    }

    useEffect(() => {
        if (imageRef.current) {
            imageRef.current.style.width = width + 'px';
            imageRef.current.style.height = height + 'px';
        }
    }, [width, height,loaded]);

    const ImageLoader = (props) => <>
        {
            props.children
        }
        {
            !loaded && <img ref={image} className="opacity-10 w-10 h-10" src={imageUrl} onLoad={handleLoad} />

        }
    </>

    if (background === true) {

        const style = {
            backgroundImage: `url(${source})`,
            backgroundPositionX: 'center',
            backgroundPositionY: 'center'
        };

        if(hotspot){
            if( hotspot.x > 0.6 ){
                style.backgroundPositionX = 'right';
            }else if(src.hotspot.x < 0.4){
                style.backgroundPositionX = 'left';
            }
            if( hotspot.y > 0.6 ){
                style.backgroundPositionY = 'bottom';
            }else if(src.hotspot.y < 0.4){
                style.backgroundPositionY = 'top';
            }
        }

        return <ImageLoader>
            { 
                source && <div className={twMerge('bg-cover', classes)}
                    ref={imageRef}
                    style={style}></div>
            }
            
        </ImageLoader>
    } else {
        return <ImageLoader>
                { source && <img className={classes ? classes : ''} ref={imageRef} src={source}/> }
            </ImageLoader>
    }


}

export default ImageComponent;

ImageComponent.propTypes = {

    src: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]).isRequired
};