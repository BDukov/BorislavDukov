/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faUpwork,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";
import "./Contacts.css";

function SocialIcon({ icon }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FontAwesomeIcon
      icon={icon}
      style={{ fontSize: "4em", color: isHovered ? "black" : "gray" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}

export default function Contacts() {
  return (
    <>
      <div className="contacts">

        <div className="banner">
          <div className="container">
            <div className="banner-info">
              <h1>contacts.</h1>
              <h2>Get in touch with me via social media or email.</h2>
              <ul className="social-icons">
                <Link
                  to="https://www.facebook.com/profile.php?id=100001198746109"
                  target="_blank"
                >
                  <li>
                    <SocialIcon icon={faFacebook} />
                  </li>
                </Link>

                <Link
                  to="https://www.linkedin.com/in/borislav-dukov/"
                  target="_blank"
                >
                  <li>
                    <SocialIcon icon={faLinkedin} />
                  </li>
                </Link>

                <Link
                  to="https://www.upwork.com/freelancers/~011ab4f1b065de0c89"
                  target="_blank"
                >
                  <li>
                    <SocialIcon icon={faUpwork} />
                  </li>
                </Link>
              </ul>
            </div>
            <div className="banner-image">
              <img src="./dukov.png" alt="" />
            </div>
          </div>
        </div>

        <div className="contact-form">
            <h3>Send me an email</h3>
            <div className="form">

            </div>
        </div>
      </div>
    </>
  );
}
