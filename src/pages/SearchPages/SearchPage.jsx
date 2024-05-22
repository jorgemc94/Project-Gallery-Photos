
import { HeaderComponent } from "../../components/HeaderComponents/HeaderComponent"
import { FooterComponent } from '../../components/FooterComponents/FooterComponent'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { GetSearchRandomThunk } from "../../features/Search/SearchThunk"
import { SearchComponent } from "../../components/SearchComponents/SearchComponent"
import './SearchPage.css'

export const SearchPage = () => {
    const search = useSelector((state) => state.search.data)
    const searchStatus = useSelector((state) => state.search.status)
    const searchError = useSelector((state) => state.search.error)
    const [loading, setLoading] = useState(false)
    const [photo, setPhoto] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        if (searchStatus === 'idle') {
            dispatch(GetSearchRandomThunk())
        } else if (searchStatus === 'pending') {
            setLoading(true)
        } else if (searchStatus === 'fulfilled') {
            setLoading(false)
            setPhoto(search)
        } else {
            alert ('error')
        }
    }, [search, searchStatus, dispatch])

    return (
        <>
            <HeaderComponent isSearchPage={true}/>
            {loading ? <p>Loading</p> : 
               <div className="SearchPage">
                    {photo.map((img) => (
                        <SearchComponent isSearchPage={true}
                            key={img.id} 
                            image={img.urls.small}
                        />
                    ))}
               </div>
            }
            <FooterComponent/> 
        </>
    )
}