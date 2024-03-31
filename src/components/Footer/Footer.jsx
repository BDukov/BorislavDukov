import { Link } from "react-router-dom";
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


export default function Footer() {

    return(
        <>
        <div className="footer">
            <div className="crated-by">
                <p>&copy; Borislav Dukov 2024</p>
            </div>

            <div className="go-to-top">
            <FontAwesomeIcon icon={faChevronUp} style={{fontSize: '3em', color: 'black'}}/>
            </div>

            <ul className="nav">

                {/* <Link to="/">
                    <li>Home</li>
                </Link> */}

                <Link to="/about">
                    <li>About</li>
                </Link>

                <Link to="/projects">
                    <li>Projects</li>
                </Link>

                <Link to="/services">
                    <li>Services</li>
                </Link>

                <Link to="/contacts">
                    <li>Contacts</li>
                </Link>
                </ul>
        </div>
        </>
    )
}