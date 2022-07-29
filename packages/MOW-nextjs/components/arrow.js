import PropTypes from "prop-types";
import { twMerge } from 'tailwind-merge';
import { MdKeyboardArrowLeft as ArrowLeft } from 'react-icons/md'

const layouts = {
    'button-default': 'opacity-0 w-0',
    'button-left-hover': 'pr-2 w-6 h-6 opacity-100',
    'button-right-hover': 'pl-2 w-6 h-6 w-auto opacity-100'
}

layouts['button-right-out'] = layouts['button-left-out'] = layouts['button-left'] = layouts['button-right'] = layouts['button-default'];

const ArrowComponent = ({ type, layout: propsLayout, state = 'out' }) => {

    const content = type === 'left' ? <ArrowLeft className="w-full h-full"/> : <ArrowLeft className="w-full h-full rotate-180"/>

    const layout = `${propsLayout}-${type}${state !== '' ? '-' : ''}${state}`

    return <span className={twMerge('inline-block transition-all w-full', layouts[layout] ? layouts[layout] : '')}>{content}</span>
}

export default ArrowComponent;

ArrowComponent.propTypes = {
    flavor: PropTypes.oneOf(['left', 'right']),
};