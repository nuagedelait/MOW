import Overlay from '../overlay';


const layouts = {
    'full-image-droite' : 'pl-32 pt-32 pb-32',
    'full-image-gauche' : 'pr-32 pt-32 pb-32',
    'horizontal': 'p-20',
    'vertical': 'p-20',
}


export default (props) => {

    const height = props.height ? props.height : '';

    const {
        name,
        children,
        layout,
        background,
        classes
    } = props;

    const addClasses =(classes ? classes  + ' ' : '') + (layouts[layout] ? layouts[layout] : 'p-32');
    
    const style = {};

    if(background){
        style.backgroundImage = `url(${background})`;
    }

    return <div id={name ? name : null} style={style} className={`relative line bg-cover ${height} ${addClasses}`} >
        {
            children
        }
    </div>
}