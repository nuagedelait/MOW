export default (props) => {
    const {
        width,
        name,
        children
    } = props

    return <div className={`column ${width} first:pl-0 first:pr-10 last:pr-0 last:pl-10 flex flex-col justify-center align-center`}>
        {
            children
        }
    </div>
}