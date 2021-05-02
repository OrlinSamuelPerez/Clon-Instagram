export default function History(props){
    return(
        <div className="main-h">
        <article className="history-main">
            <div>
                <img src={props.img} alt={props.user}/>
            </div>
        </article>
        <span>{props.user}</span>
    </div>
    )
}