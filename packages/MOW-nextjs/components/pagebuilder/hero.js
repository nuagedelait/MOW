import { useContext, useEffect } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Image from '../image';
import BlocContent from './blocContent';
import Overlay from '../overlay';
import Title from '../title';

import { WindowContext } from '../page'

export default ({ data }) => {

    const windowDimensions = useContext(WindowContext);

    return (
        <BlocContent id={data.id} type={data._type}>
            <div className={data.slug}>
                <div className="relative">
                    <Image size="premium" src={data.image} width={windowDimensions.width} height={windowDimensions.height} background></Image>
                </div>
                <Overlay></Overlay>
                <div className="absolute top-0 flex flex-col justify-center align-middle w-full !h-full">
                    <hgroup className="text-center text-white text-lg">
                        <Title type="h2" className="text-white">{data.heading}</Title>
                        <p className="font-instaquote text-5xl">{data.tagline}</p>
                    </hgroup>
                </div>
            </div>
        </BlocContent>
    );
}