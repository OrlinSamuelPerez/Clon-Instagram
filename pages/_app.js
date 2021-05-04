import '../styles/globals.css'
import '../styles/History.css'
import '../styles/Navbar.css'
import '../styles/Post.css'
import '../styles/ImgExplore.css'
import NavBar from './components/NavBar'
import '../styles/Comment.css'
function MyApp({ Component, pageProps }) {
  return (
    <>
    <NavBar/>
    <main>
      <Component {...pageProps} />
    </main>
    </>
  )
}

export default MyApp
