import { CartWidget } from "./CartWidget"
import logo from '../assets/logo.png';
import { Link, NavLink } from "react-router-dom";



export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-white">
                <div className="container-fluid">
                    <Link to="/">
                        <img width={150} src={logo} alt="logo empresa" />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/varietal/Malbec" className="nav-link" >Malbec</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/varietal/CabFranc" className="nav-link">Cabernet Franc</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/varietal/SauvBlanc" className="nav-link">Sauvignon Blanc</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/varietal/Espumante" className="nav-link">Espumante</NavLink>
                            </li>
                        </ul>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}