import { Link } from "react-router-dom"
import './navbar.css'

function Navbar(){
    return (
        <nav aria-label="Main navigation">
            <ul>
                <li className="left">
                    <Link to="/">Home</Link>
                </li>
                <li className="right">
                    <Link to="/login">Login</Link>
                </li>
                <li className="right">
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar