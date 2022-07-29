import { useState } from 'react';
import { twMerge } from 'tailwind-merge'

import Arrow from './arrow'

export default (props) => {

    const [state, setState] = useState('')

    const {
        children,
        action,
        type,
        className: classes,
        arrow
    } = props;

    const handleMouse = (event) => {
        setState(event);
    }

    return <button
        className={twMerge('flex flex-row justify-center align-middle appearance-none rounded-full px-9 py-4 m-2 border-0 bg-green-500 text-center font-semibold text-white',classes ? classes : '')}
        type={type ? type : null}
        onMouseOver={() => handleMouse("hover")}
        onMouseOut={() => handleMouse("out")}
        onClick={action ? action : null}>
        {
            arrow && arrow === 'left' && <Arrow type="left" layout= "button" state={state}></Arrow>
        }
        {
            children
        }
        {
            arrow && arrow === 'right' && <Arrow type="right" layout= "button" state={state}></Arrow>
        }
    </button>
}