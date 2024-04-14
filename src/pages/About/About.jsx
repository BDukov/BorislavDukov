/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import "./About.css";

export default function About() {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null)
  const ref4 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { onc: true });
  return (
    <>
      <div className="about">

        <div className="banner"
        ref={ref}
        >
          <div className="container">
            <div  className="banner-info">
              <motion.h1
                      style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                      }}
              >about.</motion.h1>
              <motion.h2
                                    style={{
                                      transform: isInView ? "none" : "translateX(-200px)",
                                      opacity: isInView ? 1 : 0,
                                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
                                    }}
                                    >
                I'm graduated JavaScript Web Developer based in Dimitrovgrad,
                Bulgaria
              </motion.h2>
              <motion.p
                                    style={{
                                      transform: isInView ? "none" : "translateX(-200px)",
                                      opacity: isInView ? 1 : 0,
                                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
                                    }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, quae!
              </motion.p>
            </div>
            <motion.div
                                  style={{
                                    transform: isInView ? "none" : "translateX(200px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
                                  }}
                                   className="banner-image">
              <img src="./dukov.png" alt="" />
            </motion.div>
          </div>
        </div>

        <div className="skills"
        ref={ref1}>
            <div className="container">

            <motion.div className="design-skills"
                                  style={{
                                    transform: isInView1 ? "none" : "translateX(-200px)",
                                    opacity: isInView1 ? 1 : 0,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                                  }}
            >
                <h3>Design</h3>
                <p>UI design</p>
                <p>UX design</p>
                <p>Figma</p>
                <p>Canva</p>
            </motion.div>

            <motion.div className="skills-image"
                                  style={{
                                    transform: isInView1 ? "none" : "translateY(200px)",
                                    opacity: isInView1 ? 1 : 0,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                                  }}
                                  >
                <img src="./diagram2.png" alt="" />
            </motion.div>

            <motion.div className="coding-skills"
                                  style={{
                                    transform: isInView1 ? "none" : "translateX(200px)",
                                    opacity: isInView1 ? 1 : 0,
                                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                                  }}>
                <h3>Coding</h3>
                <p>Front-end development</p>
                <p>HTML / CSS</p>
                <p>WordPress</p>
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>React</p>
                <p>Angular</p>
                <p>MongoDB</p>
                <p>NodeJs</p>
            </motion.div>

            </div>
        </div>

        <div className="hobby"
        ref={ref2}>
            <div className="container">
                <motion.div className="hobby-image"
                                      style={{
                                        transform: isInView2 ? "none" : "translateX(-200px)",
                                        opacity: isInView2 ? 1 : 0,
                                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                                      }}>
                    <img src="./fishing.png" alt="" />
                </motion.div>
                <motion.div className="hobby-info"
                                      style={{
                                        transform: isInView2 ? "none" : "translateX(200px)",
                                        opacity: isInView2 ? 1 : 0,
                                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                                      }}>
                    <h3>Hobbies</h3>
                    <p>I drink a lot of coffee</p>
                    <p>I like to read a lot of books</p>
                    <p>Stoicism books are my favorite</p>
                    <p>Fishing is my top hobby</p>
                    <p>I like to watch fishing videos on YouTube</p>
                    <p>I love the mountains and walks by mountain rivers and dams</p>
                    <p>My favorite food is the berries</p>

                </motion.div>
            </div>
        </div>

        <div className="applications"
        ref={ref3}>
            <div className="container">
                <h3>Тechnologies I use</h3>
                <div className="stack">

                    <motion.div id="angular" className="tech-app"
                                                          style={{
                                                            transform: isInView3 ? "none" : "translateY(200px)",
                                                            opacity: isInView3 ? 1 : 0,
                                                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                                                          }}>
                        <h3 className="alt">Angular</h3>
                        <Link to='https://angular.io/' target="_blank">
                        <img src="./angular.png" alt="" />
                        </Link>
                    </motion.div>

                    <motion.div id="react" className="tech-app"
                    style={{
                      transform: isInView3 ? "none" : "translateY(200px)",
                      opacity: isInView3 ? 1 : 0,
                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}>
                        <h3 className="alt">React</h3>
                        <Link to='https://react.dev/' target="_blank">
                        <img src="./react.png" alt="" />
                        </Link>
                    </motion.div>

                    <motion.div id="wordpress" className="tech-app"
                    style={{
                      transform: isInView3 ? "none" : "translateY(200px)",
                      opacity: isInView3 ? 1 : 0,
                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}>
                        <h3 className="alt">WordPress</h3>
                        <Link to='https://wordpress.com/' target="_blank">
                        <img src="./wordpress.png" alt="" />
                        </Link>
                    </motion.div>

                    <motion.div id="node-js" className="tech-app"
                    style={{
                      transform: isInView3 ? "none" : "translateY(200px)",
                      opacity: isInView3 ? 1 : 0,
                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}>
                        <h3 className="alt">NodeJs</h3>
                        <Link to='https://nodejs.org/en' target="_blank">
                        <img src="./nodejs.png" alt="" />
                        </Link>
                    </motion.div>

                    <motion.div id="mongo" className="tech-app"
                    style={{
                      transform: isInView3 ? "none" : "translateY(200px)",
                      opacity: isInView3 ? 1 : 0,
                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}>
                        <h3 className="alt">MongoDB</h3>
                        <Link to='https://www.mongodb.com/' target="_blank">
                        <img src="./mongodb.png" alt="" />
                        </Link>
                    </motion.div>

                    <motion.div id="javascript" className="tech-app"
                    style={{
                      transform: isInView3 ? "none" : "translateY(200px)",
                      opacity: isInView3 ? 1 : 0,
                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}>
                        <h3 className="alt">JavaScript</h3>
                        <Link to='https://www.javascript.com/' target="_blank">
                        <img src="./javascript.png" alt="" />
                        </Link>
                    </motion.div>

                    <motion.div id="typescript" className="tech-app"
                    style={{
                      transform: isInView3 ? "none" : "translateY(200px)",
                      opacity: isInView3 ? 1 : 0,
                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}>
                        <h3 className="alt">TypeScript</h3>
                        <Link to='https://www.typescript.org/' target="_blank">
                        <img src="./typescript.png" alt="" />
                        </Link>
                    </motion.div>

                    <motion.div id="html" className="tech-app"
                    style={{
                      transform: isInView3 ? "none" : "translateY(200px)",
                      opacity: isInView3 ? 1 : 0,
                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}>
                        <h3 className="alt">HTML</h3>
                        <Link to='' target="_blank">
                        <img src="./html.png" alt="" />
                        </Link>
                    </motion.div>

                    <motion.div id="css" className="tech-app"
                    style={{
                      transform: isInView3 ? "none" : "translateY(200px)",
                      opacity: isInView3 ? 1 : 0,
                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}>
                        <h3 className="alt">CSS</h3>
                        <Link to='https://developer.mozilla.org/en-US/docs/Web/CSS' target="_blank">
                        <img src="./css.png" alt="" />
                        </Link>
                    </motion.div>

                    <motion.div id="openai" className="tech-app"
                    style={{
                      transform: isInView3 ? "none" : "translateY(200px)",
                      opacity: isInView3 ? 1 : 0,
                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}>
                        <h3 className="alt">OpenAi</h3>
                        <Link to='https://openai.com/' target="_blank">
                        <img src="./openai.png" alt="" />
                        </Link>
                    </motion.div>

                    <motion.div id="scrum" className="tech-app"
                    style={{
                      transform: isInView3 ? "none" : "translateY(200px)",
                      opacity: isInView3 ? 1 : 0,
                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}>
                        <h3 className="alt">SCRUM</h3>
                        <Link to='https://www.scrum.org/' target="_blank">
                        <img src="./scrum.png" alt="" />
                        </Link>
                    </motion.div>
                    
                </div>

            </div>
        </div>

        <div className="story"
        ref={ref4}>
            <div className="container">
                <div className="story-info">
                    <motion.h3
                                                                          style={{
                                                                            transform: isInView4 ? "none" : "translateX(-200px)",
                                                                            opacity: isInView4 ? 1 : 0,
                                                                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                                                                          }}
                                                                          >My story</motion.h3>
                    <motion.p
                                                      style={{
                                                        transform: isInView4 ? "none" : "translateX(-200px)",
                                                        opacity: isInView4 ? 1 : 0,
                                                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
                                                      }}
                                                      >
                    I am 33 years old and a real enthusiast in the world of
                the programming to which I have directed my passion and efforts through
                last years. With a diploma in Web Developer and a master's degree in
                Project management, I have created a number of successful ones
                projects using technologies like Angular and React. With rich
                skill set in technologies such as, JavaScript, TypeScript, HTML,
                CSS, Firebase, WordPress, PHP, MongoDB and NodeJs.
              </motion.p>
              <motion.p
                                                                    style={{
                                                                      transform: isInView4 ? "none" : "translateX(-200px)",
                                                                      opacity: isInView4 ? 1 : 0,
                                                                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
                                                                    }}>
              My quest for constant self-improvement and learning
                excels in programming. I totally am
                dedicated to the development and improvement of his skills.
              </motion.p>
              <motion.p
                                                                    style={{
                                                                      transform: isInView4 ? "none" : "translateX(-200px)",
                                                                      opacity: isInView4 ? 1 : 0,
                                                                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
                                                                    }}>
              In my spare time, I find solace and inspiration in
                spinning fishing and reading books, especially related ones
                with stoicism. My love for nature, mountains, rivers and
                dams not only enriches my personal life but also influences the
                my professional activity, where this passion is reflected in
                my designs and applications.
              </motion.p>
              <motion.p
                                                                    style={{
                                                                      transform: isInView4 ? "none" : "translateX(-200px)",
                                                                      opacity: isInView4 ? 1 : 0,
                                                                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
                                                                    }}>
              My goals are to provide web solutions that excel
                customer expectations and create measurable success for them. I am dedicated to bringing innovation and creative approaches to everyone
                a project with which I contribute to the enrichment of the Internet
                the space and create a positive impact.
                </motion.p>
                </div>
                <motion.div className="story-image"
                                                                      style={{
                                                                        transform: isInView4 ? "none" : "translateX(200px)",
                                                                        opacity: isInView4 ? 1 : 0,
                                                                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                                                                      }}>
                    <img src="./freelance.jpg" alt="" />
                </motion.div>
            </div>
        </div>
      </div>
    </>
  );
}
