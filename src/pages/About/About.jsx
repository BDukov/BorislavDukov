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
      </div>
    </>
  );
}
