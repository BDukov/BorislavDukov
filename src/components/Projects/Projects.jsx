import './Projects.css'

export default function Projects() {

    return(
        <>
        <div className="projects">

            <p id='headline'>Some of my lastest work</p>

            <div className="container">

                <article>
                    <div className="image-container">
                    <img src="./dicheva-home.png" alt="" />
                    </div>
                    <h3>Nadezhda Dicheva</h3>
                    <p>Portfolio Website</p>
                </article>

                <article>
                    <div className="image-container">
                    <img src="./honey-app.png" alt="" />
                    </div>
                    <h3>Honey</h3>
                    <p>Blog</p>
                </article>

                <article>
                    <div className="image-container">
                    <img src="./Plan B - Contacts.png" alt="" />
                    </div>
                    <h3>PlanB Web Services</h3>
                    <p>Portfolio Website</p>
                </article>


            </div>
            </div></>
    );
}