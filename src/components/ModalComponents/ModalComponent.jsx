
import './ModalComponent.css'

export const ModalComponent = ({isOpen, onClose, description, width, height, likes, date}) => {

    return(
        <>
            <dialog className="ModalComponent" open={isOpen}>
                <span className="material-symbols-outlined ModalComponent__Close" onClick={onClose}> cancel </span>
                <h2 className="ModalComponent__Title">Desciption</h2>
                <textarea className="ModalComponent__Description" placeholder={description}></textarea>
                <ul className="ModalComponent__list">
                    <li className="ModalComponent__list__item"><p className="ModalComponent__list__item__definicion">Width: </p>{width}</li>
                    <li className="ModalComponent__list__item"><p className="ModalComponent__list__item__definicion">Height: </p>{height}</li>
                    <li className="ModalComponent__list__item"><p className="ModalComponent__list__item__definicion">Likes: </p>{likes}</li>
                    <li className="ModalComponent__list__item"><p className="ModalComponent__list__item__definicion">Date: </p>{date}</li>
                </ul>
                <button type='submit' onClick={onClose} className='ModalComponent__send'>Send</button>
            </dialog>
        </>
    )
}