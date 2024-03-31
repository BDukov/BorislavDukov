
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faUpwork } from '@fortawesome/free-brands-svg-icons';

import { Link } from "react-router-dom";
import "./Header.css";

function SocialIcon({ icon }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <FontAwesomeIcon 
          icon={icon} 
          style={{ fontSize: '2em', color: isHovered ? 'gray' : 'white' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
      />
  );
}

export default function Header() {

  return (
    <>
      <div className="header">

        <div className="content box">

        <Link to={"/"}>
          <img src="./BD.png" alt="" />
        </Link>

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

        <ul className="social-icons">
        <Link to='https://www.facebook.com/profile.php?id=100001198746109' target="_blank">
            <li>
            <SocialIcon icon={faFacebook}/>
            </li>
        </Link>

        <Link to='https://github.com/BDukov' target="_blank">
            <li>
            <SocialIcon icon={faGithub}/>
            </li>
        </Link>

        <Link to='https://www.linkedin.com/in/borislav-dukov/' target="_blank">
            <li>
            <SocialIcon icon={faLinkedin}/>
            </li>
        </Link>
        
        <Link to='https://www.upwork.com/freelancers/~011ab4f1b065de0c89' target="_blank">
            <li>
            <SocialIcon icon={faUpwork}/>
            </li>
        </Link>
        </ul>
        </div>
      </div>
    </>
  );
}
