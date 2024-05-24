
import './OrderByComponent.css'

export const OrderByComponent = () => {


    return (
        <>
            <label className="OrderByComponent__title">
                Order By:
            </label>
            <select className="OrderByComponent__select">
                <option value={'width'}>Width</option>
                <option value={'heigth'}>Height</option>
                <option value={'likes'}>Likes</option>
                <option value={'date'}>Date</option>
            </select>
        </>
    )
}