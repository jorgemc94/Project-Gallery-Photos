
import { useDispatch, useSelector } from 'react-redux'
import './InputComponent.css'
import { GetSearchPhotoThunk, GetSearchRandomThunk } from '../../features/Search/SearchThunk'
import { useState } from 'react'

export const InputComponent = () => {

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


export const InputSearchComponent = ({ updateFilteredPhotos }) => {
    const [searchText, setSearchText] = useState('');
    const favoritePhotos = useSelector((state) => state.favorite.data);
    
    const FilterFavoriteHandler = (event) => {
        const searchText = event.target.value;
        setSearchText(searchText);
        const filteredPhotos = favoritePhotos.filter(image => image.description.includes(searchText));
        updateFilteredPhotos(filteredPhotos);
    };

    return (
        <div className='InputComponent '>
            <input
                type='text' 
                placeholder='search photos by description' 
                className="InputComponent__content InputComponent__content__favorite" 
                name='search' 
                value={searchText}
                onChange={FilterFavoriteHandler}
            />
            <span className='material-symbols-outlined InputComponent__content__icon InputComponent__content__icon__favorite'>search</span>
        </div>
    );
};