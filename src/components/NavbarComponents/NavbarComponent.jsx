import { NavLink } from "react-router-dom"
import './NavbarComponent.css'

export const NavbarComponent = () => {


    return (
        <>
            <nav className='NavbarComponent'>
                <div className='NavbarComponent__logo'>
                    <NavLink to={'/'} className='NavbarComponent__logo__text'>ALL PHOTOS</NavLink>
                </div>
                <div className='NavbarComponent__links'>
                    <ul className='NavbarComponent__links__list'>
                        <NavLink to={'/FavoritePhoto'} className='NavbarComponent__links__list__item'>FavoritePhotos</NavLink>
                    </ul>
                </div>
            </nav>
        </>
    )
}