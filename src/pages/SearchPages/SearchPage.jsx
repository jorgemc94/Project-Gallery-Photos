import { HeaderComponent } from "../../components/HeaderComponents/HeaderComponent"
import { FooterComponent } from '../../components/FooterComponents/FooterComponent'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { GetSearchRandomThunk } from "../../features/Search/SearchThunk"
import { ImageComponent } from "../../components/ImageComponents/ImagenComponent"
import './SearchPage.css'
import { Alert, Slide } from "@mui/material"

export const SearchPage = () => {
    const search = useSelector((state) => state.search.data)
    const searchStatus = useSelector((state) => state.search.status)
    const searchError = useSelector((state) => state.search.error)
    const [loading, setLoading] = useState(false)
    const [photo, setPhoto] = useState([])
    const dispatch = useDispatch()
    const [alert, setAlert] = useState({ show: false, message: '' })

    useEffect(() => {
        if (searchStatus === 'idle') {
            dispatch(GetSearchRandomThunk())
        } else if (searchStatus === 'pending') {
            setLoading(true)
        } else if (searchStatus === 'fulfilled') {
            setLoading(false)
            setPhoto(search)
        } else {
            setAlert({ show: true, message: 'Error fetching data' })
        }
    }, [search, searchStatus, dispatch])

    return (
        <>
            <HeaderComponent isSearchPage={true} />
            <Slide direction="down" in={alert.show} onEntered={() => { setTimeout(() => setAlert({ show: false, message: '' }), 3000) }} timeout={500} mountOnEnter unmountOnExit>
                <Alert severity="success">{alert.message}</Alert>
            </Slide>
            {loading ? <p>Loading...</p> :
                <div className="SearchPage">
                    {photo.map((img, index) => (
                        <ImageComponent
                            isSearchPage={true}
                            toast={(message) => setAlert({ show: true, message })}
                            date={img.created_at}
                            description={img.alt_description}
                            height={img.height}
                            id={img.id}
                            image={img.urls.small}
                            likes={img.likes}
                            width={img.width}
                            key={index}
                        />
                    ))}
                </div>
            }
            <FooterComponent />
        </>
    )
}
