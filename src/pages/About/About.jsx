/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

import "./About.css";

export default function About() {
  return (
    <>
      <div className="about">

        <div className="banner">
          <div className="container">
            <div className="banner-info">
              <h1>about.</h1>
              <h2>
                I'm graduated JavaScript Web Developer based in Dimitrovgrad,
                Bulgaria
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, quae!
              </p>
            </div>
            <div className="banner-image">
              <img src="./dukov.png" alt="" />
            </div>
          </div>
        </div>

        <div className="skills">
            <div className="container">

            <div className="design-skills">
                <h3>Design</h3>
                <p>UI design</p>
                <p>UX design</p>
                <p>Figma</p>
                <p>Canva</p>
            </div>

            <div className="skills-image">
                <img src="./diagram2.png" alt="" />
            </div>

            <div className="coding-skills">
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
            </div>

            </div>
        </div>

        <div className="hobby">
            <div className="container">
                <div className="hobby-image">
                    <img src="./fishing.png" alt="" />
                </div>
                <div className="hobby-info">
                    <h3>Hobbies</h3>
                    <p>I drink a lot of coffee</p>
                    <p>I like to read a lot of books</p>
                    <p>Stoicism books are my favorite</p>
                    <p>Fishing is my top hobby</p>
                    <p>I like to watch fishing videos on YouTube</p>
                    <p>I love the mountains and walks by mountain rivers and dams</p>
                    <p>My favorite food is the berries</p>

                </div>
            </div>
        </div>

        <div className="applications">
            <div className="container">
                <h3>Тechnologies I use</h3>
                <div className="stack">

                    <div id="angular" className="tech-app">
                        <h3 className="alt">Angular</h3>
                        <Link to='https://angular.io/' target="_blank">
                        <img src="./angular.png" alt="" />
                        </Link>
                    </div>

                    <div id="react" className="tech-app">
                        <h3 className="alt">React</h3>
                        <Link to='https://react.dev/' target="_blank">
                        <img src="./react.png" alt="" />
                        </Link>
                    </div>

                    <div id="wordpress" className="tech-app">
                        <h3 className="alt">WordPress</h3>
                        <Link to='https://wordpress.com/' target="_blank">
                        <img src="./wordpress.png" alt="" />
                        </Link>
                    </div>

                    <div id="node-js" className="tech-app">
                        <h3 className="alt">NodeJs</h3>
                        <Link to='https://nodejs.org/en' target="_blank">
                        <img src="./nodejs.png" alt="" />
                        </Link>
                    </div>

                    <div id="mongo" className="tech-app">
                        <h3 className="alt">MongoDB</h3>
                        <Link to='https://www.mongodb.com/' target="_blank">
                        <img src="./mongodb.png" alt="" />
                        </Link>
                    </div>

                    <div id="javascript" className="tech-app">
                        <h3 className="alt">JavaScript</h3>
                        <Link to='https://www.javascript.com/' target="_blank">
                        <img src="./javascript.png" alt="" />
                        </Link>
                    </div>

                    <div id="typescript" className="tech-app">
                        <h3 className="alt">TypeScript</h3>
                        <Link to='https://www.typescript.org/' target="_blank">
                        <img src="./typescript.png" alt="" />
                        </Link>
                    </div>

                    <div id="html" className="tech-app">
                        <h3 className="alt">HTML</h3>
                        <Link to='' target="_blank">
                        <img src="./html.png" alt="" />
                        </Link>
                    </div>

                    <div id="css" className="tech-app">
                        <h3 className="alt">CSS</h3>
                        <Link to='https://developer.mozilla.org/en-US/docs/Web/CSS' target="_blank">
                        <img src="./css.png" alt="" />
                        </Link>
                    </div>

                    <div id="openai" className="tech-app">
                        <h3 className="alt">OpenAi</h3>
                        <Link to='https://openai.com/' target="_blank">
                        <img src="./openai.png" alt="" />
                        </Link>
                    </div>

                    <div id="scrum" className="tech-app">
                        <h3 className="alt">SCRUM</h3>
                        <Link to='https://www.scrum.org/' target="_blank">
                        <img src="./scrum.png" alt="" />
                        </Link>
                    </div>
                    
                </div>

            </div>
        </div>
      </div>
    </>
  );
}
