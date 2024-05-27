
import { saveAs } from 'file-saver'
import './IconsComponent.css'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite } from '../../features/Favorite/FavoriteSlice'
import { removeFavorite } from '../../features/Favorite/FavoriteSlice'
import { useState } from 'react'
import { ModalComponent } from '../ModalComponents/ModalComponent'


export const IconsSearchComponent = (props) => {

    const dispatch = useDispatch()
    

    const AddFavoriteHandler = (event) => {
        event.preventDefault()
       console.log( dispatch(addFavorite({
            id: props.id,
            image: props.image,
            description: props.description,
            height: props.height,
            width: props.width,
            likes: props.likes,
            date: props.date,
            
            
        })));    
        
    }
    

    return (
        <>
            <div className="IconsComponent">
                <span className="material-symbols-outlined IconsComponent__Icon" onClick={AddFavoriteHandler}> heart_plus </span>
                <span className="material-symbols-outlined IconsComponent__Icon" onClick={()=>saveAs(props.image) }> download </span>
            </div>
        </>
    )
}


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


    return (
        <>
            <div className="IconsComponent">
                <span className="material-symbols-outlined IconsComponent__Icon" onClick={RemoveFavoriteHandler}> heart_minus </span>
                <span className="material-symbols-outlined IconsComponent__Icon" onClick={openModal}> edit </span>
                <span className="material-symbols-outlined IconsComponent__Icon" onClick={()=>saveAs(props.image) }> download </span>
                
            </div>
            {isOpenModal ? (<ModalComponent isOpen={isOpenModal} onClose={closeModal} description={props.description} width={props.width} height={props.height} likes={props.likes} date={props.date}/>):<p></p>}
        </>
    )
}





