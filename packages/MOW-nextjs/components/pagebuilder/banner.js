import BlocContent from './blocContent';
import Column from './column';
import Line from './line';
import useImageURL from '../../hooks/useImageURL';
import LastWord from '../lastWord';
import Overlay from '../overlay';
import Form from '../form'

export default ({data}) => {

    return <Line layout={data.layout} background={useImageURL(data.background,"premium")} classes="bg-center">
        <Overlay value="10"></Overlay>
        <BlocContent id={data.id} type={data._type}>
            <Column  width="w-1/2">
                <h3 className="font-playfair text-white">
                    <LastWord options={{
                        firstClasses: 'font-quicksand text-2xl tracking-widest uppercase',
                        secondClasses: 'font-bold text-7xl',
                        breakline:true
                        }}>{data.title}</LastWord>
                </h3>
            </Column>
            <Column  width="w-1/2">
                        {
                            data.form && <Form reference={data.form._ref} layout={`banner-${data.slug}-${data.layout}`}/>
                        }
            </Column>
        </BlocContent>
    </Line>
}