
import { IconsFavoriteComponent } from '../IconsComponents/IconsFavoriteComponent/IconsFavoriteCompoent';
import { IconsSearchComponent } from '../IconsComponents/IconsSearchComponent/IconsComponent';
import './ImageComponent.css'

export const ImageComponent = (props) => {
    return (
        <div className='ImageComponent'>
            <img className="ImageComponent__img" src={props.image} alt={props.description}/>
            {props.isSearchPage ? 
                <IconsSearchComponent
                    toast= {props.toast} 
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
