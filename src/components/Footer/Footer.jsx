import { useState } from "react";

import { Link } from "react-router-dom";
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
    const [isHover, setIsHover] = useState(false);
    
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
    }); 
    }


    return(
        <>
        <div className="footer">
            <div className="crated-by">
                <p>&copy; Borislav Dukov 2024</p>
            </div>

            <div className="go-to-top"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            >
                <button onClick={scrollUp} style={{border: "none"}}>

            <FontAwesomeIcon icon={faChevronUp} style={{fontSize: '3em', color: isHover ? 'black' : '#999999'}}
            />
                </button>
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