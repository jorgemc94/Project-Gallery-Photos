
import { IconsFavoriteComponent, IconsSearchComponent } from '../IconsComponents/IconsComponent'
import './ImageComponent.css'

export const ImageComponent = (props) => {

    return(
        <>
            <div className='ImageComponent'>
                <img className="ImageComponent__img" src={props.image}/>
                {props.isSearchPage ? <IconsSearchComponent image={props.image}/> : <IconsFavoriteComponent image={props.image}/>}
            </div>
        </>
    )
}