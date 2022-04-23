import React from "react";
import NavButton from "../components/NavButton";

function Menu() {
    return (
        <nav className="nav justify-content-center" >
            <NavButton name="Home" link="/" />
            <NavButton name="About" link="/about" />
            <NavButton name="Projects" link="/projects" />
        </nav>
    );
}

export default Menu;