import CardHistory from './components/CardHistory'
import Post from './components/Post'
export default function Home() {
  return (  
     <>
      <CardHistory/>
      <Post
         user="Orlin_s-Perez" 
         description=" Ustedes son los que les toman esas fotografías a uno? Tiene algún costo? Gracias y Bendiciones 🙏🏼" 
         imgPost="https://images.pexels.com/photos/7148662/pexels-photo-7148662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
         ubicacion="Jarabacoa"
          />
                <Post
         user="maria_hernandez" 
         imgUser="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=94"
         description=" Ustedes son los que les toman esas fotografías a uno? Tiene algún costo? Gracias y Bendiciones 🙏🏼" 
         imgPost="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
         ubicacion="Jarabacoa"
          />
                <Post
         user="Orlin_s-Perez" 
         description=" Ustedes son los que les toman esas fotografías a uno? Tiene algún costo? Gracias y Bendiciones 🙏🏼" 
         imgPost="https://images.pexels.com/photos/7148662/pexels-photo-7148662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
         ubicacion="Jarabacoa"
          />
      </>
    )
}
