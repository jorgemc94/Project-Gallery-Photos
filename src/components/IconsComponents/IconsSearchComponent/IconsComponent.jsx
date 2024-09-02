
import { saveAs } from 'file-saver'
import '../IconsComponent.css'
import { useDispatch, } from 'react-redux'
import { addFavorite } from '../../../features/Favorite/FavoriteSlice'

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
        props.toast(true)
    }

    

    return (
        <>
            <div className="IconsComponent">
                <span className="material-symbols-outlined IconsComponent__Icon" onClick={AddFavoriteHandler}> heart_plus </span>
                <span className="material-symbols-outlined IconsComponent__Icon" onClick={()=>saveAs(props.image, props.toast(true)) }> download </span>
            </div>
        </>
    )
}








