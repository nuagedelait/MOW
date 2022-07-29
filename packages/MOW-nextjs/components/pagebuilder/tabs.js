import { PortableText } from '@portabletext/react';
import { useState } from 'react';
import Title from '../title';

export default ({data}) => {

    const [currentTab, setCurrentTab] = useState(0);
    
    return <div className="w-full my-4">
        <div className="flex flex-row align-middle w-full h-12">
        {
            data.map( (panelConfig,index) => {
                return <div key={index}
                            className="flex flex-col justify-center px-2 cursor-pointer"
                            onClick={() => {setCurrentTab(index)}}
                        >
                            <Title type="h2" 
                                className={`${currentTab === index ? 'text-green-500' : 'text-gray-300'} font-nunito text-base font-normal uppercase tracking-wide m-0 hover:text-green-500`}
                            >{panelConfig.title}
                            </Title>
                        </div>
            })
        }
        </div>
        <div className="w-ful p-4">
        {
            data.map( (panelConfig,index) => {
                return <div key={index}>
                    {
                        currentTab === index && (panelConfig.type === 'text' || panelConfig.type === 'textArea') && panelConfig.value
                    }
                    {
                        currentTab === index && panelConfig.type === 'richText' && <PortableText value={panelConfig.value} />
                    }
                </div>
            })
        }
        </div>
    </div>
}