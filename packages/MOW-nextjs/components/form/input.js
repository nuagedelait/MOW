import { twMerge } from 'tailwind-merge'

const layouts = {
    'banner-newsletter-horizontal': 'rounded-l-full w-7/12'
}

export default ({className:classes, data }) => {

    const style = data && data.layout && layouts[data.layout] || '';

    return <input
        name={data.name} 
        type={data.type}
        className={twMerge('appearance-none px-3.5 py-3.5 border-0',style,classes)}
        placeholder={data.placeholder}
    >
    </input>
}