
import { IconsFavoriteComponent, IconsSearchComponent } from '../IconsComponents/IconsComponent'
import './SearchComponent.css'

export const SearchComponent = (props) => {

    return(
        <>
            <div className='SearchComponent'>
                <img className="SearchComponent__img" src={props.image}/>
                {props.isSearchPage ? <IconsSearchComponent image={props.image}/> : <IconsFavoriteComponent image={props.image}/>}
            </div>
        </>
    )
}