
import BlocContent from './blocContent';
import Gallery from './gallery';
import Column from './column';
import Line from './line';
import { PortableText } from '@portabletext/react';
import Title from '../title';

export default ({ data }) => {

    return (
        <Line layout={data.layout}>
            <BlocContent id={data.id} type={data._type}>
                {
                    data.layout.indexOf('image-gauche') > -1 && <Column width="w-1/2">
                        <Gallery images={data.images} layout={data.layout}></Gallery>
                    </Column>
                }
                <Column width="w-1/2">
                    <div className="relative flex flex-col justify-center h-full pb-40">
                        <hgroup className="text-left text-black text-lg">
                            <Title type="h4">{data.subtitle}</Title>
                            <Title type="h2">{data.title}</Title>
                        </hgroup>
                        <PortableText value={data.content} />
                    </div>
                </Column>
                {
                    data.layout.indexOf('image-droite') > -1 && <Column width="w-1/2">
                        <Gallery size="medium" images={data.images} layout={data.layout}></Gallery>
                    </Column>
                }
            </BlocContent>
        </Line>
    );
}