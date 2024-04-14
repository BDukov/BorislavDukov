/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faUpwork,
} from "@fortawesome/free-brands-svg-icons";
import { motion, useInView } from 'framer-motion'
import usePageSEO from "../../hooks/userPageSEO";

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

  usePageSEO({
    type: 'website',
    title: 'Contacts page',
    description: 'Contacts with Borislav Dukov - Web Developer',
    keywords: ["contacts", 'borislav', 'dukov', 'web developer', 'developer'],
    ogTitle: 'Contacts page',
    ogDescription: 'Contacts page Borislav Dukov - Web Developer',
    ogImage: 'https://www.borislavdukov.com/Bdukov.png',
    ogUrl: 'https://borislavdukov.com/home'
  })

  const ref = useRef(null);
  const ref1 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView1 = useInView(ref1, { once: true });

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

        <div className="banner"
        ref={ref}>
          <div className="container">
            <div className="banner-info">
              <motion.h1
                                      style={{
                                        transform: isInView ? "none" : "translateX(-200px)",
                                        opacity: isInView ? 1 : 0,
                                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                                      }}
              >contacts.</motion.h1>
              <motion.h2
                                                    style={{
                                                      transform: isInView ? "none" : "translateX(-200px)",
                                                      opacity: isInView ? 1 : 0,
                                                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
                                                    }}
              >Get in touch with me via social media or email.</motion.h2>
              <motion.ul className="social-icons"
                                                    style={{
                                                      transform: isInView ? "none" : "translateX(-200px)",
                                                      opacity: isInView ? 1 : 0,
                                                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
                                                    }}>
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
              </motion.ul>
            </div>
            <motion.div className="banner-image"
                                                  style={{
                                                    transform: isInView ? "none" : "translateX(200px)",
                                                    opacity: isInView ? 1 : 0,
                                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                                                  }}>
              <img src="./dukov.png" alt="" />
            </motion.div>
          </div>
        </div>

        <div className='contacts-section'
        ref={ref1}>
          <div className="container">
            <motion.h3
                                                  style={{
                                                    transform: isInView1 ? "none" : "translateX(-200px)",
                                                    opacity: isInView1 ? 1 : 0,
                                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                                                  }}
                                                  >Send me an email</motion.h3>

        <motion.form className="contact-form" ref={form} onSubmit={sendEmail}
                                              style={{
                                                transform: isInView1 ? "none" : "translateY(200px)",
                                                opacity: isInView1 ? 1 : 0,
                                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                                              }}>

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
      
        </motion.form>
          </div>
      </div>
      </div>
    </>
  );
}
