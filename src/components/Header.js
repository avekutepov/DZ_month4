import "./Header.css"

const Header = () => {
    return(
        <header className="nav-container">
            <img src="https://preview.redd.it/mbud6h6b7od81.png?width=1440&format=png&auto=webp&s=49f9aeea394f3a2b5c1fee6a83a124f80ab9f652" alt="logo" width={250} height={100}/>
            <ul className="links-container">
                <li><a href="#">Red</a></li>
                <li><a href="#">Blue</a></li>
                <li><a href="#">Yellow</a></li>
                <li><a href="#">Green</a></li>
                <li><a href="#">Purple</a></li>
            </ul>
        </header>
    )
}

export default Header;