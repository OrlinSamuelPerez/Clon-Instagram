import History from './History'
export default function Post(props){
    return(
        <article className="post-main">
            <div className="grid-post">
                <div>
                    <History img="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
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
        
        </article>
    )
}