export default function ImgExplore(props){
    return(
        <article className="Img-Explore">
            <img src={props.urlImg} alt={props.title}/>
        </article>
    )
}