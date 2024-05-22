
import { IconsFavoriteComponent, IconsSearchComponent } from '../IconsComponents/IconsComponent'
import './SearchComponent.css'

export const SearchComponent = (props) => {

    return(
        <>
            <div className='SearchComponent'>
                <img className="SearchComponent" src={props.image}/>
                {props.isSearchPage ? <IconsSearchComponent/> : <IconsFavoriteComponent/>}
            </div>
        </>
    )
}