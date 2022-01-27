import "./NavBar.css";

import CardWidget from "./CardWidget";

const NavBar = () => {
    return (
        <div>   
            <nav className="Nav">
                <ul>
                    <li><CardWidget /></li>
                    <li>Home</li>
                    <li>Galeria</li>
                    <li>Info</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </div>
        
    );
};

export default NavBar;