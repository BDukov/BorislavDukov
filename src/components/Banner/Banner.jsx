import './Banner.css'

export default function Banner() {
    const codeStr = '< coder >'
    return(
        <>
        <div className="banner">

    <div className="hero-banner">
    <div className="container">
        <div className="banner-info">
            <h1 id="name">Borislav Dukov</h1>
            <h2 className="red-text">Web Developer</h2>
            <p id='name-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, laboriosam! </p>
        </div>
        <div className="banner-image">
            {/* <div className='img-container' id="image1">
            <img src="./dukov.png" alt=""/>
            </div> */}
            <div className='img-container' id="image2">
            <img src="./dukov.png" alt=""/>
            </div>
        </div>
        <div className="banner-info2">
            <h1>{codeStr}</h1>
            <h1>designer</h1>
        </div>
    </div>
</div>
</div>
        </>
    );
}