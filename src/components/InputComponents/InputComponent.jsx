
import './InputComponent.css'

export const InputComponet = () => {

    return (
        <div className='InputComponent'>
            <input type = 'text' placeholder = 'search photos in the gallery' className="InputComponent__content"/>
            <span className='material-symbols-outlined InputComponent__content__icon'>search</span>
        </div>
    )
}

export const InputSearchComponet = () => {

    return (
        <div className='InputComponent'>
            <input type = 'text' placeholder = 'search photos by description' className="InputComponent__content"/>
            <span className='material-symbols-outlined InputComponent__content__icon'>search</span>
        </div>
    )
}