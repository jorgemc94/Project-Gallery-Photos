
import './ModalComponent.css'

export const ModalComponent = (props) => {


    return(
        <>
            <div className="ModalComponent">
            <span className="material-symbols-outlined ModalComponent__Close"> cancel </span>
                <h2 className="ModalComponent__Title">Desciption</h2>
                <textarea className="ModalComponent__Description" placeholder={props.description}></textarea>
                <ul className="ModalComponent__list">
                    <li className="ModalComponent__list__item"><p className="ModalComponent__list__item__definicion">Width: </p>{props.width}</li>
                    <li className="ModalComponent__list__item"><p className="ModalComponent__list__item__definicion">Height: </p>{props.height}</li>
                    <li className="ModalComponent__list__item"><p className="ModalComponent__list__item__definicion">Likes: </p>{props.likes}</li>
                    <li className="ModalComponent__list__item"><p className="ModalComponent__list__item__definicion">Date: </p>{props.Date}</li>
                </ul>
                <button type='submit' className='ModalComponent__send'>Send</button>
            </div>
        </>
    )
}