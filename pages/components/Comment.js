export default function Comment(props){
    return(
        <form className="comment-main">
            <img src="/sonreir.svg"/>
            <input type="text" placeholder="Agrega un comentario..."/>
            <input type="submit" value="Publicar" disabled/>
        </form>
    )
}