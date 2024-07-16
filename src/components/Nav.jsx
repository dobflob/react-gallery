import React from "react";
import { NavLink } from "react-router-dom";
import PhotoList from "./PhotoList";
import NoResults from "./NoResults";

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="cats">Cats</NavLink></li>
                <li><NavLink to="dogs">Dogs</NavLink></li>
                <li><NavLink to="pigs">Pigs</NavLink></li>
            </ul>
        </nav>
    )
};

export default Nav;