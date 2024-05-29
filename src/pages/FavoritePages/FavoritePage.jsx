
import { HeaderComponent } from "../../components/HeaderComponents/HeaderComponent";
import { FooterComponent } from '../../components/FooterComponents/FooterComponent';
import { ImageComponent } from '../../components/ImageComponents/ImagenComponent';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { InputFavoriteComponent } from "../../components/InputComponents/InputFavoriteComponent/InputFavoriteComponent";
import './FavoritePage.css'

export const FavoritePage = () => {
    const favoritePhotos = useSelector((state) => state.favorite.data);
    const [filteredPhotos, setFilteredPhotos] = useState(favoritePhotos);
    
    const FilteredOnchange = (event) => {
        const value = event.target.value
        const SortPhoto = [...filteredPhotos].sort((a,b) => a[value] - b[value])
        setFilteredPhotos(SortPhoto)
    }

    useEffect (() => {
        setFilteredPhotos(favoritePhotos)
    }, [favoritePhotos])

    return (
        <>
            <HeaderComponent />
            <InputFavoriteComponent updateFilteredPhotos={setFilteredPhotos} />
            <select onChange={FilteredOnchange} className="OrderByComponent__select">
                <option value={'width'} >Width</option>
                <option value={'height'} >Height</option>
                <option value={'likes'} >Likes</option>
                <option value={'date'} >Date</option>
            </select>
            <div className="SearchPage">
                {favoritePhotos.length ? filteredPhotos.map((favorite) => (
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
                    ))
                : <p>No favorite Photos</p>} 
            </div>
            <FooterComponent /> 
        </>
    );
};
