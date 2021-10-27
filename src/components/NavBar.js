import 'bootstrap/dist/css/bootstrap.min.css';
import LogoNav from '../galeria/logo.jpeg'

function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                         <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                         <a class="nav-link" href="paginas/productos.html">Productos</a>
                        </li>
                        <li class="nav-item">
                         <a class="nav-link" href="paginas/servicios.html" >Servicios</a>
                        </li>
                        <li class="nav-item">
                         <a class="nav-link" href="paginas/contacto.html" >Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
            <img src={LogoNav} className="logo-nav" alt="" />
    </nav>
    )
}

export default NavBar;
