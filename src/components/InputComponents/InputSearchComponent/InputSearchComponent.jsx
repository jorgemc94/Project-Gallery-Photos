
import { useDispatch } from 'react-redux'
import '../InputComponent.css'
import { GetSearchPhotoThunk, GetSearchRandomThunk } from '../../../features/Search/SearchThunk'

export const InputSearchComponent = () => {

    const dispatch = useDispatch()

    const submitSearchHandler = (event) => {
        if (event.key === 'Enter') {
            if (event.target.value !== '') {
                dispatch(GetSearchPhotoThunk(event.target.value))
            } else {
                dispatch(GetSearchRandomThunk())
            }
        }
    }


    return (
        <div className='InputComponent'>
            <input type = 'text' placeholder = 'search photos in the gallery' className="InputComponent__content" onKeyDown={submitSearchHandler}/>
            <span className='material-symbols-outlined InputComponent__content__icon'>search</span>
        </div>
    )
}


