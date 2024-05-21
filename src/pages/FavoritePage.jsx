import { HeaderComponent } from "../components/HeaderComponents/HeaderComponent"
import { FooterComponent } from '../components/FooterComponents/FooterComponent'


export const FavoritePage = () => {

    return <>
        <HeaderComponent isSearchPage={false} isInputSearchPage={false} />
        
        <FooterComponent/> 
    </>
}