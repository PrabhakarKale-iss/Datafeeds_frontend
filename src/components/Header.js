import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import './css/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">Datafeeds</div>
            <nav>
                <ul>
                    {/* Use Link components instead of anchor tags */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    {/* <li><Link to="/footer">Contact</Link></li> */}
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
