import { HeaderComponent } from "../components/HeaderComponents/HeaderComponent"
import { FooterComponent } from '../components/FooterComponents/FooterComponent'


export const SearchPage = () => {

    return <>
        <HeaderComponent isSearchPage={true} isInputSearchPage={true} />
        
        <FooterComponent/> 
    </>
}