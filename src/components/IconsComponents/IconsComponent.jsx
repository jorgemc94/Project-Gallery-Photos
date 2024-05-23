
import { saveAs } from 'file-saver'
import './IconsComponent.css'

export const IconsSearchComponent = (props) => {

    return (
        <>
            <div className="IconsComponent">
                <span className="material-symbols-outlined IconsComponent__Icon"> heart_plus </span>
                <span className="material-symbols-outlined IconsComponent__Icon" onClick={()=>saveAs(props.image)}> download </span>
            </div>
        </>
    )
}


export const IconsFavoriteComponent = (props) => {

    return (
        <>
            <div className="IconsComponent">
                <span className="material-symbols-outlined IconsComponent__Icon"> heart_minus </span>
                <span className="material-symbols-outlined IconsComponent__Icon"> edit </span>
                <span className="material-symbols-outlined IconsComponent__Icon" onClick={()=>saveAs(props.image) }> download </span>
            </div>
        </>
    )
}