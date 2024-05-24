
import { HeaderComponent } from "../components/HeaderComponents/HeaderComponent";
import { FooterComponent } from '../components/FooterComponents/FooterComponent';
import { ImageComponent } from '../components/ImageComponents/ImagenComponent';
import { useSelector } from "react-redux";
import { useState } from "react";
import { OrderByComponent } from '../components/OrderByComponents/OrderByComponent';
import { InputSearchComponent } from "../components/InputComponents/InputComponent"; // Importa el componente de búsqueda

// Define el componente FavoritePage
export const FavoritePage = () => {
    // Obtiene las fotos favoritas del estado de Redux
    const favoritePhotos = useSelector((state) => state.favorite.data);
    
    // Estado para almacenar las fotos filtradas
    const [filteredPhotos, setFilteredPhotos] = useState([]);
    
    // Función para actualizar las fotos filtradas
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
                    // Si no hay fotos filtradas, muestra todas las fotos favoritas
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
