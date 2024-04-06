/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faUpwork,
} from "@fortawesome/free-brands-svg-icons";

import emailjs from '@emailjs/browser';

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_enzw79q', 'template_48p27yd', form.current, {
        publicKey: '_VhU5gO9PUFi_rqRg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
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

        <div className='contacts-section'>
          <div className="container">
            <h3>Send me an email</h3>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>

          <div className="top">

          <div className="left">
          <div className="form-group">
            <label htmlFor="fullName">Name</label>
            {/* <br /> */}
            <input type="text" id="fullName" name="to_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            {/* <br /> */}
            <input type="email" id="email" name="from_name" required />
          </div>
          </div>

          <div className="right">
          <div className="form-group">
            <label htmlFor="message">Message</label>
            {/* <br />   */}
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          </div>

          </div>

          <button type="submit">Send email</button>
      
        </form>
          </div>
      </div>
      </div>
    </>
  );
}
