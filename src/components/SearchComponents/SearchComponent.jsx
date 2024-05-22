
import { IconsFavoriteComponent, IconsSearchComponent } from '../IconsComponents/IconsComponent'
import './SearchComponent.css'

export const SearchComponent = (props) => {

    return(
        <>
            <img className="SearchComponent" src={props.image}/>
            {props.isSearchPage ? <IconsSearchComponent/> : <IconsFavoriteComponent/>}
        </>
    )
}