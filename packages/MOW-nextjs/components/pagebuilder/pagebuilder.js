import {createElement} from 'react';

import Hero from './hero';
import Bloc from './bloc';
import Banner from './banner'


const blocTypes = {
    "hero" : Hero,
    "bloc" : Bloc,
    "banner": Banner
}

export default ({blocs}) => {
    return <div className="pagebuilder">
        {
            blocs && blocs.map( (bloc,index) => {
                return createElement(blocTypes[bloc._type], {
                    data: {
                      ...bloc,
                      id:index
                    },
                    key: index
                })
            })
        }
    </div>
}
