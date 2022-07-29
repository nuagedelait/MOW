import Menu from './menu';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { createContext } from 'react';
import Loader from './loader';
import Content from './content';

export const WindowContext = createContext(null);
export const ConfigContext = createContext({});

export default ({ type, slug, children, config }) => {

    const windowDimensions = useWindowDimensions();

    if (!config) {
        return <Loader></Loader>
    }else{
        return <ConfigContext.Provider value={config}>
        <Menu id="main" layout={`main-${type}`}></Menu>
        <Content>
            {
                windowDimensions ? <WindowContext.Provider value={windowDimensions}>
                    {children}
                </WindowContext.Provider> : children
            }

        </Content>
    </ConfigContext.Provider>
    }
}