import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { removeFavorite } from '../../features/Favorite/FavoriteSlice';
import { HeaderComponent } from "../../components/HeaderComponents/HeaderComponent";
import { FooterComponent } from '../../components/FooterComponents/FooterComponent';
import { ImageComponent } from '../../components/ImageComponents/ImagenComponent';
import { InputFavoriteComponent } from "../../components/InputComponents/InputFavoriteComponent/InputFavoriteComponent";
import './FavoritePage.css';

export const FavoritePage = () => {
    const dispatch = useDispatch();
    const favoritePhotos = useSelector((state) => state.favorite.data);
    const [filteredPhotos, setFilteredPhotos] = useState(favoritePhotos);

    const handleRemoveClick = (id) => {
        if (id == null) {
            console.error('Invalid id passed to handleRemoveClick:', id);
            return;
        }
        dispatch(removeFavorite(id));
    };

    const FilteredOnchange = (event) => {
        const value = event.target.value;

        if (!['width', 'height', 'likes', 'date'].includes(value)) return;

        const SortPhoto = [...filteredPhotos].sort((a, b) => {
            if (a[value] == null) return 1;
            if (b[value] == null) return -1;
            return a[value] - b[value];
        });
        setFilteredPhotos(SortPhoto);
    }

    useEffect(() => {
        setFilteredPhotos(favoritePhotos);
    }, [favoritePhotos]);

    return (
        <>
            <HeaderComponent />
            <InputFavoriteComponent updateFilteredPhotos={setFilteredPhotos} />
            <select onChange={FilteredOnchange} className="OrderByComponent__select">
                <option value={'width'}>Width</option>
                <option value={'height'}>Height</option>
                <option value={'likes'}>Likes</option>
                <option value={'date'}>Date</option>
            </select>
            <div className="SearchPage">
                {favoritePhotos.length ? filteredPhotos.map((favorite) => {
                    if (!favorite || !favorite.id) {
                        console.warn('Invalid favorite item:', favorite);
                        return null;
                    }

                    return (
                        <div key={favorite.id}>
                            <ImageComponent
                                isSearchPage={false}
                                date={favorite.date}
                                description={favorite.description}
                                height={favorite.height}
                                id={favorite.id}
                                image={favorite.image}
                                likes={favorite.likes}
                                width={favorite.width}
                            />
                            <button onClick={() => handleRemoveClick(favorite.id)}>Remove</button>
                        </div>
                    );
                }) : <p>No favorite Photos</p>} 
            </div>
            <FooterComponent /> 
        </>
    );
};
