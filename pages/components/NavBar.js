import Link from 'next/link'
export default function NavBar(){
    return(
        <nav>
            <h1>Instagram</h1>
            <form>
                <input placeholder="Buscar"/>
            </form>
            <ul>
                <li><Link href="/"><a><img src="/home.svg"/></a></Link></li>
                <li><Link href="/Message"><a><img src="/send.svg"/></a></Link></li>
                <li><Link href="/Explore"><a><img src="/direction.svg"/></a></Link></li>
                <li><Link href="/Accounts"><a><img src="/me-gusta.svg"/></a></Link></li>
                <li><Link href="/Profile"><a className="profile"><img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/></a></Link></li>
            </ul>
        </nav>
    )
}