
import { InputComponent } from '../InputComponents/InputComponent'
import { InputSearchComponent } from '../InputComponents/InputComponent'
import { NavbarComponent } from '../NavbarComponents/NavbarComponent'
import './HeaderComponent.css'

export const HeaderComponent = (props) => {

    const searchContent = 'Increíble Galería de Imágenes Para Descargar. Contamos con más de 1 millón de imágenes gracias a Unplash'
    const FavoriteContent = 'Bienvenido a su galería personal. Aquí podrá encontrar todas aquellas fotos que haya guardado como favoritas'

    return (
        <>
            <header className='HeaderComponent'>
                <NavbarComponent/>
                {props.isSearchPage ?  <p className='HeaderComponent__text'>{searchContent}</p> : <p className='HeaderComponent__text'>{FavoriteContent}</p> }
                {props.isSearchPage ?  <InputComponent/> : <br></br>}
            </header>
        </>
    )
}