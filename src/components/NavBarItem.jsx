import { CartWidget } from "./CartWidget"
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";



export const NavBarItem = ({texto}) => {
    return (
        <>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Tienda</a>
                            </li>

        </>
    )
}