/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import usePageSEO from '../../hooks/userPageSEO';

import { motion } from "framer-motion";


import './ProjectsPage.css'

export default function ProjectsPage(){
    usePageSEO({
        title: 'Projects page',
        description: 'Projects of Borislav Dukov - Web Developer',
        keywords: ["projects", 'borislav', 'dukov', 'web developer', 'developer', 'portfolio'],
        type: 'website',
        ogTitle: 'Projects page',
        ogDescription: 'Projects page Borislav Dukov - Web Developer',
        ogImage: 'https://www.borislavdukov.com/Bdukov.png',
        ogUrl: 'https://borislavdukov.com/projects'
      });


    return(
        <>
        <div className="projects-page">
            <div className="projects-section">

            <div className="container" >
                
                <motion.h1
                                initial={{opacity: 0}}
                                animate={{opacity: 1, x: [100, 0]}}
                                transition={{ ease: "easeOut", duration: 1, delay: 0.5}}
                >Explore My Portfolio</motion.h1>
                <motion.img 
                initial={{opacity: 0}}
                animate={{opacity: 1, y: [100, 0]}}
                transition={{ ease: "easeOut", duration: 1, delay: 0.5}}
                src="./Bdukov.png" alt="" />


                <div className="portfolio-content" >

                        <Link to='https://www.nadezhdadicheva.com/' target='_blank'>
                <article className='card'>
                    <div className="ar-16x9">
                            <img src="./Projects/dicheva-home.png" alt="" />
                    </div>
                    <div className='on-hover'>
                    <p>NadezhdaDicheva</p>
                    <p id='category'>Portfolio</p>
                    </div>
                </article>
                        </Link>

                        <Link to='https://z7-task1-pp39.vercel.app/' target='_blank'>
                <article className='card'>
                    <div className="ar-16x9">
                            <img src="./Projects/z7-task1.png" alt="" />
                    </div>
                    <div className='on-hover'>
                    <p>Z7 Task1</p>
                    <p id='category'>Landing page</p>
                    </div>
                </article>
                        </Link>

                <article className='card'>
                <div className="ar-16x9">
                        <img src="./Projects/honey-app.png" alt="" />
                    </div>
                    <div className='on-hover'>
                    <p>Honey App</p>
                    <p id='category'>Blog</p>
                    </div>
                </article>

                <article className='card'>
                <div className="ar-16x9">
                        <img src="./Projects/Plan B - Contacts.png" alt="" />
                    </div>
                    <div className='on-hover'>
                    <p>Plan B Web Services</p>
                    <p id='category'>Portfolio</p>
                    </div>
                </article>

                    <Link to='https://bdukov.github.io/SignUp-Form/' target='_blank'>
                <article className='card'>
                <div className="ar-16x9">
                        <img src="./Projects/SignUp-Form.png" alt="" />
                    </div>
                    <div className='on-hover'>
                    <p>Sign Up Form</p>
                    <p id='category'>Login Form</p>
                    </div>
                </article>
                    </Link> 

                    <Link to='https://bdukov.github.io/3D-Swing/' target='_blank'>
                <article className='card'>
                <div className="ar-16x9">
                        <img src="./Projects/3D-swing.png" alt="" />
                    </div>
                    <div className='on-hover'>
                    <p>3D Swing</p>
                    <p id='category'>3D elements</p>
                    </div>
                </article>
                    </Link>

                    <Link to='https://bdukov.github.io/Dark-Mode/' target='_blank'>
                <article className='card'>
                <div className="ar-16x9">
                        <img src="./Projects/MasterCard.png" alt="" />
                    </div>
                    <div className='on-hover'>
                    <p>MasterCard</p>
                    <p id='category'>Switch Dark mode</p>
                    </div>
                </article>
                    </Link>

                    <Link to='https://bdukov.github.io/Nike-Product-Card/' target='_blank'>
                <article className='card'>
                <div className="ar-16x9">
                        <img src="./Projects/Nike-Product-Card.png" alt="" />
                    </div>
                    <div className='on-hover'>
                    <p>Nike</p>
                    <p id='category'>Product Card</p>
                    </div>
                </article>
                    </Link>

                    <Link to='https://bdukov.github.io/3D-Menu/' target='_blank'>
                <article className='card'>
                <div className="ar-16x9">
                        <img src="./Projects/3D-menu.png" alt="" />
                    </div>
                    <div className='on-hover'>
                    <p>3D Menu</p>
                    <p id='category'>Menu</p>
                    </div>
                </article>
                    </Link>

                    <Link to='https://bdukov.github.io/3D-Landing-Page/' target='_blank'>
                <article className='card'>
                <div className="ar-16x9">
                        <img src="./Projects/3D-landing-page.png" alt="" />
                    </div>
                    <div className='on-hover'>
                    <p>3D Page</p>
                    <p id='category'>Landing Page</p>
                    </div>
                </article>
                    </Link>

                    <Link to='https://bdukov.github.io/Animated-Landing-Page/' target='_blank'>
                <article className='card'>
                <div className="ar-16x9">
                        <img src="./Projects/LandingPage.png" alt="" />
                    </div>
                    <div className='on-hover'>
                    <p>Animated Landing Page</p>
                    <p id='category'>Landing Page</p>
                    </div>
                </article>
                    </Link>

                    <Link to='https://bdukov.github.io/3D-Room/' target='_blank'>
                <article className='card'>
                <div className="ar-16x9">
                        <img src="./Projects/3D-room.png" alt="" />
                    </div>
                    <div className='on-hover'>
                    <p>3D Room</p>
                    <p id='category'>3D Application</p>
                    </div>
                </article>
                    </Link>
            
                    <Link to='https://bdukov.github.io/3D-Button/' target='_blank'>
                <article className='card'>
                <div className="ar-16x9">
                        <img src="./Projects/3D-button.png" alt="" />
                    </div>
                    <div className='on-hover'>
                    <p>3D Button</p>
                    <p id='category'>Button</p>
                    </div>
                </article>
                    </Link>

                    <Link to='https://bdukov.github.io/Landing-Page-With-Modal-Forms/' target='_blank'>
                <article className='card'>
                <div className="ar-16x9">
                        <img src="./Projects/Landing-Page-With-Modal-Forms.png" alt="" />
                    </div>
                    <div className='on-hover'>
                    <p>Landing Page</p>
                    <p id='category'>Modal Forms</p>
                    </div>
                </article>
                    </Link>

            </div>

            </div>

            </div>
        </div>
        </>
    );
}