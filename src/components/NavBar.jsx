import { CartWidget } from "./CartWidget"
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";



export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-white">
                <div className="container-fluid">
                    <Link to="/">
                        <img width={150} src={logo} />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/Malbec" className="nav-link">Malbec</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Malbec" className="nav-link">Cabernet Franc</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Malbec" className="nav-link">Chardonnay</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Malbec" className="nav-link">Espumante</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Nosotros" className="nav-link">Nosotros</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contacto" className="nav-link">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}