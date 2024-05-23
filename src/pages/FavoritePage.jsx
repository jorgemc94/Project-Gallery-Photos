import { HeaderComponent } from "../components/HeaderComponents/HeaderComponent";
import { FooterComponent } from '../components/FooterComponents/FooterComponent';
import { ImageComponent } from '../components/ImageComponents/ImagenComponent';
import { useSelector } from "react-redux";

export const FavoritePage = () => {
    const favorites = useSelector((state) => state.favorite.data);

    return (
        <>
            <HeaderComponent />
            
            <div className="SearchPage">
                {favorites.map((favorite) => (
                    <ImageComponent 
                        key={favorite.id}
                        isSearchPage={false}
                        image={favorite.image}
                        description={favorite.alt_description}
                        height={favorite.height}
                        width={favorite.width}
                        likes={favorite.likes}
                        date={favorite.created_at}
                    />
                ))}
            </div>
            
            <FooterComponent /> 
        </>
    );
}