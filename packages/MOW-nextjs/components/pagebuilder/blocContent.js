export default (props) => {

    const {
        id,
        type
    } = props

    return (
        <div id={`pb-${id}`} className={` ${type} relative flex flex-row items-stretch`}>
            {
                props.children
            }
        </div>

    )
}