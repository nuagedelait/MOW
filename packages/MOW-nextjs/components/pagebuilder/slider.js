import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Gallery from './gallery';
import Arrow from '../arrow';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export default ({ images, preview, onClick }) => {

    const [maxPages, setMaxPages] = useState(null)
    const [currentPage, setCurrentPage] = useState(0);
    const [galleryLoaded, setGalleryLoaded] = useState(false);
    const contentRef = useRef(null);
    const galleryRef = useRef(null);
    const WindowDimensions = useWindowDimensions();

    const handleArrows = (direction) => {
        let newPage = currentPage;
        if (direction === 'left' && currentPage > 0) {
            newPage = currentPage - 1;
        } else if (direction === 'right' && currentPage < maxPages - 1) {
            newPage = currentPage + 1;
        }
        const distance = contentRef.current.getBoundingClientRect().width;
        let position = -newPage * distance;

        if (position < distance - galleryRef.current.scrollWidth) {
            position = distance - galleryRef.current.scrollWidth;
        }

        galleryRef.current.style.left = position + 'px';

        setCurrentPage(newPage)
    }

    const handleClick = (selection) => {
        onClick(selection);
    }

    useEffect(() => {
        if (contentRef.current && galleryRef.current) {
            const galleryWidth = galleryRef.current.scrollWidth;
            const containerWidth = contentRef.current.getBoundingClientRect().width;
            setCurrentPage(0);
            galleryRef.current.style.left = 0 + 'px';
            setMaxPages(Math.floor(galleryWidth / containerWidth) + 1);
        }
    }, [contentRef.current, WindowDimensions.x, WindowDimensions.y,galleryLoaded])

    const Side = (props) => {
        return <div onClick={props.onClick} className={twMerge('flex flex-col justify-center w-1/12 first:pr-2 last:pl-2 cursor-pointer', props.className)}>{props.children}</div>
    }

    const previewLine = <div className="relative flex flex-row justify-center w-full h-40">

        <Side className={(currentPage === 0) ? "opacity-30 cursor-default" : "opacity-100"}
            onClick={() => handleArrows('left')}>
            <Arrow type="left"></Arrow>
        </Side>

        <div ref={contentRef} className="flex flex-col justify-center w-5/6 h-full overflow-hidden">
            <Gallery onLoad={() => { setGalleryLoaded(true) }} onSelect={handleClick} ref={galleryRef} images={images} size="slider_preview" layout="slider" onClick></Gallery>
        </div>

        <Side className={(currentPage === maxPages - 1) ? "opacity-30 cursor-default" : "opacity-100"}
            onClick={() => handleArrows('right')}>
            <Arrow type="right"></Arrow>
        </Side>
    </div>

    if (onClick && preview) {

        return previewLine
    }

    return <div></div>
}