
import { IconsFavoriteComponent, IconsSearchComponent } from '../IconsComponents/IconsComponent'
import './ImageComponent.css'

export const ImageComponent = (props) => {
    return (
        <div className='ImageComponent'>
            <img className="ImageComponent__img" src={props.image} alt={props.description}/>
            {props.isSearchPage ? 
                <IconsSearchComponent 
                    id={props.id} 
                    image={props.image} 
                    description={props.description} 
                    height={props.height} 
                    width={props.width} 
                    likes={props.likes} 
                    date={props.date}
                /> 
                : 
                <IconsFavoriteComponent 
                    isSearchPage={false} 
                    id={props.id} 
                    image={props.image} 
                    description={props.description} 
                    height={props.height} 
                    width={props.width} 
                    likes={props.likes} 
                    date={props.date}
                />
            }
        </div>
    );
}
