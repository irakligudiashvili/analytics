import { Link } from "react-router-dom"
import './navbar.css'
import { useAuth } from "../contexts/AuthContext";

function Navbar(){
    const {isLoggedIn, logout} = useAuth();

    return (
        <nav aria-label="Main navigation">
            <ul>
                <li className="left">
                    <Link to="/">Home</Link>
                </li>
                {isLoggedIn ? (
                    <li className="right">
                        <Link to="/" onClick={logout}>Logout</Link>
                    </li>
                ) : (
                    <li className="right">
                        <Link to="/login">Login</Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar