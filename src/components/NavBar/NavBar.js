import "./NavBar.css";
import CardWidget from "../CardWidget/CardWidget";

const NavBar = () => {
    return (
        <div>   
            <nav className="Nav">
                <ul>
                    <li>
                        <h1 className="Logo">EcommerJR</h1>
                    </li>
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