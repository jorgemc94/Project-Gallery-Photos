
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useState } from "react"
import { removeFavorite } from "../../../features/Favorite/FavoriteSlice"
import { editDescription } from "../../../features/Favorite/FavoriteSlice"
import { ModalComponent } from "../../ModalComponents/ModalComponent"
import '../IconsComponent.css'

export const IconsFavoriteComponent = (props) => {

    const dispatch = useDispatch()
    const Favorite = useSelector ((state) => state.search.data)
    const [isOpenModal, setIsOpenModal] = useState(false)
   
    const RemoveFavoriteHandler = (event) => {
        event.preventDefault()
        dispatch(removeFavorite(
            props.id
            
        ));    
        
    }

    const openModal = () => {
        setIsOpenModal(true)
    }

    const closeModal = () => {
        setIsOpenModal(false)
    }

    const ModifyDescriptionHandler = (event) => {
        event.preventDefault()
        const value = event.target.elements[0].value
        dispatch(editDescription(
            {id: props.id, description: value}
        ))
        setIsOpenModal(false)
    }
    return (
        <>
            <div className="IconsComponent">
                <span className="material-symbols-outlined IconsComponent__Icon" onClick={RemoveFavoriteHandler}> heart_minus </span>
                <span className="material-symbols-outlined IconsComponent__Icon" onClick={openModal}> edit </span>
                <span className="material-symbols-outlined IconsComponent__Icon" onClick={()=>saveAs(props.image) }> download </span>
                
            </div>
            {isOpenModal ? (<ModalComponent isOpen={isOpenModal} onClose={closeModal} description={props.description} width={props.width} height={props.height} likes={props.likes} date={props.date} onSubmit={ModifyDescriptionHandler}/>):<p></p>}
        </>
    )
}