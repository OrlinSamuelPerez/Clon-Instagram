import axios from "axios"
import { useEffect, useState } from "react"
import ImgExplore from './components/ImgExplore'
export default function Explore(){
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('https://pixabay.com/api/?key=19566722-ad1859f30b9e5cc39e00508a9&q=dog+computer&image_type=photo&pretty=true')
        .then(resp => setData(resp.data.hits))
    }, [])
    return(
        <section className="ImgExplore-grid">
            {
                data.map(imgData =>
                    <ImgExplore urlImg={imgData.largeImageURL} title={imgData.tags}/>
                )
            }
        </section>
    )
}