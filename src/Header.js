import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <NavLink to="/" className="header-brand">ron</NavLink>
            <nav>
                <ul>
                    <li><NavLink to="/porfolio">Porfolio</NavLink></li>
                    <li><NavLink to="/about"> About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>

                <NavLink to="/cases" className="header-cases">Cases</NavLink>
            </nav>    
        </header>
    );
}

export default Header;