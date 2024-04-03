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
                        <a href="https://angular.io/">
                        <img src="./angular.png" alt="" />
                        </a>
                    </div>
                    <div id="react" className="tech-app">
                        <h3 className="alt">React</h3>
                        <a href="https://react.dev/">
                        <img src="./react.png" alt="" />
                        </a>
                    </div>
                    <div id="wordpress" className="tech-app">
                        <h3 className="alt">WordPress</h3>
                        <a href="https://wordpress.com/">
                        <img src="./wordpress.png" alt="" />
                        </a>
                    </div>
                    <div id="node-js" className="tech-app">
                        <h3 className="alt">NodeJs</h3>
                        <a href="https://nodejs.org/en">
                        <img src="./nodejs.png" alt="" />
                        </a>
                    </div>
                    <div id="mongo" className="tech-app">
                        <h3 className="alt">MongoDB</h3>
                        <a href="https://www.mongodb.com/">
                        <img src="./mongodb.png" alt="" />
                        </a>
                    </div>
                    <div id="javascript" className="tech-app">
                        <h3 className="alt">JavaScript</h3>
                        <a href="https://www.javascript.com/">
                        <img src="./javascript.png" alt="" />
                        </a>
                    </div>
                    <div id="typescript" className="tech-app">
                        <h3 className="alt">TypeScript</h3>
                        <a href="https://www.typescript.org/">
                        <img src="./typescript.png" alt="" />
                        </a>
                    </div>
                    <div id="html" className="tech-app">
                        <h3 className="alt">HTML</h3>
                        <a href="">
                        <img src="./html.png" alt="" />
                        </a>
                    </div>
                    <div id="css" className="tech-app">
                        <h3 className="alt">CSS</h3>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                        <img src="./css.png" alt="" />
                        </a>
                    </div>
                    <div id="openai" className="tech-app">
                        <h3 className="alt">OpenAi</h3>
                        <a href="https://openai.com/">
                        <img src="./openai.png" alt="" />
                        </a>
                    </div>
                    <div id="scrum" className="tech-app">
                        <h3 className="alt">SCRUM</h3>
                        <a href="https://www.scrum.org/">
                        <img src="./scrum.png" alt="" />
                        </a>
                    </div>
                    
                </div>

            </div>
        </div>
      </div>
    </>
  );
}
