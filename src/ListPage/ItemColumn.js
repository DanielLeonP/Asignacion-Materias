import './List.css'
export const ItemColumn = ({ item }) => {
    return (
        <div className="itemColumn">
            <div>{item.title}</div>
            <div className='field'>{item.value}</div>
        </div>
    )
}
