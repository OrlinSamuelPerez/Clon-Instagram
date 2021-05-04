import History from './History'
import Comment from './Comment'
export default function Post(props){
    return(
        <article className="post-main">
            <div className="grid-post">
                <div>
                    <History img={props.imgUser} />
                </div>
                <div className="user-ubi">
                    <span className="user">{props.user}</span><br></br>
                    <span>{props.ubicacion}</span>
                </div>     
            </div>

            <div className="img-post">
                <img src={props.imgPost}/>
            </div>

            <div className="gust-icons"></div>
            <article>
                <p> 
                    <span>{props.user}</span>
                    {props.description}
                </p>
                <time>Hace un dia</time>
            </article>
        <Comment/>
        </article>
    )
}