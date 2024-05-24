
import { saveAs } from 'file-saver'
import './IconsComponent.css'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite } from '../../features/Favorite/FavoriteSlice'
import { removeFavorite } from '../../features/Favorite/FavoriteSlice'


export const IconsSearchComponent = (props) => {

    const dispatch = useDispatch()
    const Favorite = useSelector ((state) => state.favorite.data)

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
    const Favorite = useSelector ((state) => state.favorite.data)
   
    const RemoveFavoriteHandler = (event) => {
        event.preventDefault()
        dispatch(removeFavorite({
            id: props.id
            
        }));    
        
    }

    return (
        <>
            <div className="IconsComponent">
                <span className="material-symbols-outlined IconsComponent__Icon" onClick={RemoveFavoriteHandler}> heart_minus </span>
                <span className="material-symbols-outlined IconsComponent__Icon"> edit </span>
                <span className="material-symbols-outlined IconsComponent__Icon" onClick={()=>saveAs(props.image) }> download </span>
            </div>
        </>
    )
}