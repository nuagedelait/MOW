import Image from '../image';
import { twMerge } from 'tailwind-merge';
import { forwardRef, useEffect, useState } from 'react';

const imageLayouts = {
    'slider': 'w-36 h-36 mx-2',
    'image-gauche' : ['relative w-5/6 left-0','-translate-y-1/3 relative w-4/6 -translate-x-full left-[100%] max-h-72 h-auto w-auto'],
    'image-droite': ['relative w-5/6 left-full -translate-x-full','-translate-y-1/3 relative w-4/6 left-0 max-h-72 h-auto w-auto'],
}

imageLayouts['full-image-gauche'] = imageLayouts['image-gauche'];
imageLayouts['full-image-droite'] = imageLayouts['image-droite'];

const liLayout = {
    'slider': 'w-36 h-36 min-w-max cursor-pointer',
}

const ulLayout = {
    'slider': 'flex flex-row justify-start transition-all',
}

function getImageStyle(layout,index){
    const l = imageLayouts[layout];
    if(l){
        if(Array.isArray(l) && index < l.length){
            return l[index];
        }
        return l
    }
    return '';
}

export default forwardRef((props,ref) => {


    const [loaded,setLoaded] = useState(0);

    const {
        images,
        layout,
        type,
        size,
        onSelect,
        onLoad
    } = props;

    if(!images || images.length === 0 || !Array.isArray(images)){
        console.warn('Gallery with no image (or not an array) provided')
        return null
    }

    useEffect(() => {
        if(loaded === images.length && onLoad){
            onLoad();
        }
    },[loaded])

    const handleLoad = (index) => {
        const newLoaded = loaded + 1;
        setLoaded(newLoaded)
    }
    
    return (
        <ul ref={ref} className={twMerge("gallery relative",ulLayout[layout] ? ulLayout[layout] : '')}>
            {
                images.map( (image,index) => {
                    const style = getImageStyle(layout,index);
                    return <li key={index} className={liLayout[layout] ? liLayout[layout] : ''} onClick={() => {if(onSelect){onSelect({index:index,image})}}}>
                        <Image 
                        name={`image-${index}`}
                        src={{...image.asset,hotspot:image.hotspot ? image.hotspot : null}} 
                        className={style !== '' ? style : null}
                        size={size ? size : null}
                        onLoad={() => {handleLoad(index)}}
                        ></Image>
                    </li>
                })
            }
        </ul>
    )
})