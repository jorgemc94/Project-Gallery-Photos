
import { useState } from "react";
import { useSelector } from "react-redux";
import '../InputComponent.css';

export const InputFavoriteComponent = ({ updateFilteredPhotos }) => {
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