import { useEffect, useRef, useContext, useState } from "react"
import { WindowContext } from "./page";
import Image from './image';
import Back from './back';
import Title from './title';
import Slider from './pagebuilder/slider';
import Tabs from './pagebuilder/tabs';

export default ({ data }) => {

    const content = useRef(null);
    const windowDimensions = useContext(WindowContext);
    const [coverImage, setCoverImage] = useState(data.cover)

    useEffect(() => {
        if(content.current){
            content.current.style.width = windowDimensions.width + 'px';
            content.current.style.height = windowDimensions.height + 'px';
        }
    }, [
        windowDimensions.width, 
        windowDimensions.height
    ])
    const handleSliderClick = (selection) => {
        setCoverImage(selection.image)
    }

    const tabs = [...data.body];
    const link = tabs.pop();

    return <div ref={content} id={`post-${data._id}`} className="relative flex flex-row">
        <div className="w-1/2 h-full">
            <Image size="premium" src={coverImage} className="w-full h-full" background={true}></Image>
        </div>
        <div className="w-1/2 h-full flex flex-col p-6">
            <div className="flex flex-row justify-between"><Back></Back><span>MAP HERE</span></div>
            <Title className="my-8">{data.title}</Title>
            
            <Slider images={data.gallery.images} onClick={handleSliderClick} preview></Slider>

            <Tabs data={tabs}></Tabs>
        </div>
    </div>
}
