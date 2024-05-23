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
                {favorites.map((img) => (
                    <ImageComponent 
                        key={img.id}
                        isSearchPage={false}
                        image={img.image}
                        description={img.alt_description}
                        height={img.height}
                        width={img.width}
                        likes={img.likes}
                        date={img.created_at}
                    />
                ))}
            </div>
            
            <FooterComponent /> 
        </>
    );
};
