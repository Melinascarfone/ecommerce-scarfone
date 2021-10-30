import '../css/style.css'
import LogoNav from '../assets/logo.jpeg'
import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <header className="header">
            <img src={LogoNav} className="logo-nav" alt="" />
            <nav>
                <a href="#"> Productos </a>
                <a href="#"> Servicios </a>
                <a href="#"> Contacto </a>
                <a href="#"> <CartWidget/></a>          
            </nav>
        </header>
    )
}

export default NavBar;
