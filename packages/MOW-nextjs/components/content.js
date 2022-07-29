import { useContext } from "react"
import useImageURL from '../hooks/useImageURL';
import { ConfigContext } from './page'

export default ({children}) => {
    const config = useContext(ConfigContext);

    return <div id="content" className="absolute w-full top-0 z-0 bg-cover"
        style={{
            backgroundImage: `url(${useImageURL(config.background, "premium")}`
        }}
    >{children}</div>
}