import { saveAs } from 'file-saver'
import '../IconsComponent.css'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../../../features/Favorite/FavoriteSlice'
import { toast } from 'sonner'

export const IconsSearchComponent = (props) => {
    const dispatch = useDispatch()

    const AddFavoriteHandler = (event) => {
        event.preventDefault()
        dispatch(addFavorite({
            id: props.id,
            image: props.image,
            description: props.description,
            height: props.height,
            width: props.width,
            likes: props.likes,
            date: props.date,
        }))
        toast.success("Added to favorites!") 
    }

    const downloadHandler = () => {
        saveAs(props.image)
        toast.success("Downloaded!")
    }

    return (
        <div className="IconsComponent">
            <span className="material-symbols-outlined IconsComponent__Icon" onClick={AddFavoriteHandler}> heart_plus </span>
            <span className="material-symbols-outlined IconsComponent__Icon" onClick={downloadHandler}> download </span>
        </div>
    )
}
