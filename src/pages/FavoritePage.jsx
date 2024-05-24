
import { HeaderComponent } from "../components/HeaderComponents/HeaderComponent";
import { FooterComponent } from '../components/FooterComponents/FooterComponent';
import { ImageComponent } from '../components/ImageComponents/ImagenComponent';
import { useSelector } from "react-redux";
import { OrderByComponent } from '../components/OrderByComponents/OrderByComponent'


export const FavoritePage = () => {
    
    
    const FavoritePhotos = useSelector((state) => state.favorite.data);
   

    return (
        <>
            <HeaderComponent />
            <OrderByComponent/>
            <div className="SearchPage">
                {FavoritePhotos.map((favorite) => (
                    <ImageComponent
                        isSearchPage = {false}
                        date={favorite.date} 
                        description={favorite.description} 
                        height={favorite.height}
                        id={favorite.id}
                        image={favorite.image}
                        likes={favorite.likes}
                        width={favorite.width}
                        
                    /> 
                ))}
            </div>
            <FooterComponent /> 
        </>
    );
}