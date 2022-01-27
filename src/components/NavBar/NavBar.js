import "./NavBar.css";
import CardWidget from "../CardWidget/CardWidget";

const NavBar = () => {
    return (
        <div>   
            <nav className="Nav">
                <ul>
                    <li>Home</li>
                    <li>Galeria</li>
                    <li>Info</li>
                    <li>Contacto</li>
                    <li><CardWidget/></li>
                </ul>
            </nav>
        </div>
        
    );
};

export default NavBar;