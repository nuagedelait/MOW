import Button from '../button';

const layouts = {
    'banner-newsletter-horizontal': 'rounded-l-none w-5/12 m-0'
}

export default (props) => {

    const {
        children,
        data
    } = props

    const classes = data && data.layout && layouts[data.layout] || '';

    return <Button type="submit" className={classes}>{children ? children : data.text}</Button>
}