export default ({children,options = {}}) => {
    if(!children || typeof children !== 'string'){
        return  <></>
    }
    const words = children.split(' ');
    const last = words.pop();
    return <>
            <span className={options.firstClasses}>{words.join(' ')}</span>
            {   
                options.breakline && <br/>
            }
            <span className={options.secondClasses}>{' ' +last}</span>
        </>;
}