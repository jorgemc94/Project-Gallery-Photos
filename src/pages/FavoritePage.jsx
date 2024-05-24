
import { HeaderComponent } from "../components/HeaderComponents/HeaderComponent";
import { FooterComponent } from '../components/FooterComponents/FooterComponent';
import { ImageComponent } from '../components/ImageComponents/ImagenComponent';
import { useSelector } from "react-redux";
import { useState } from "react";
import { OrderByComponent } from '../components/OrderByComponents/OrderByComponent';
import { InputSearchComponent } from "../components/InputComponents/InputComponent";


export const FavoritePage = () => {
    const favoritePhotos = useSelector((state) => state.favorite.data);
    const [filteredPhotos, setFilteredPhotos] = useState([]);
    const updateFilteredPhotos = (filteredPhotos) => {
        setFilteredPhotos(filteredPhotos);
    };
    
  

    return (
        <>
            <HeaderComponent />
            <InputSearchComponent updateFilteredPhotos={updateFilteredPhotos} />
            <OrderByComponent/>
            <div className="SearchPage">
                {filteredPhotos.length > 0 ? (
                    filteredPhotos.map((favorite) => (
                        <ImageComponent
                            isSearchPage={false}
                            date={favorite.date} 
                            description={favorite.description} 
                            height={favorite.height}
                            key={favorite.id}
                            image={favorite.image}
                            likes={favorite.likes}
                            width={favorite.width}
                        /> 
                    ))
                ) : (
                    
                    favoritePhotos.map((favorite) => (
                        <ImageComponent
                            isSearchPage={false}
                            date={favorite.date} 
                            description={favorite.description} 
                            height={favorite.height}
                            key={favorite.id}
                            image={favorite.image}
                            likes={favorite.likes}
                            width={favorite.width}
                        /> 
                    ))
                )}
            </div>
            <FooterComponent /> 
        </>
    );
};
