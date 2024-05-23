
import { saveAs } from 'file-saver'
import './IconsComponent.css'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../../features/Favorite/FavoriteSlice'

export const IconsSearchComponent = (props) => {

    const dispatch = useDispatch()

    const AddFavoriteHandler = (event) => {
        event.preventDefault()
        dispatch(addFavorite({
            key: props.key,
            image: props.image,
            description: props.alt_description,
            height: props.height,
            width: props.width,
            likes: props.likes,
            date: props.date
        }));    
        
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

    return (
        <>
            <div className="IconsComponent">
                <span className="material-symbols-outlined IconsComponent__Icon"> heart_minus </span>
                <span className="material-symbols-outlined IconsComponent__Icon"> edit </span>
                <span className="material-symbols-outlined IconsComponent__Icon" onClick={()=>saveAs(props.image) }> download </span>
            </div>
        </>
    )
}