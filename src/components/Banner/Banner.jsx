import { motion } from 'framer-motion';

import './Banner.css'


export default function Banner() {
    const codeStr = '< code >'

    return(
        <>
        <div className="banner">

    <div className="hero-banner">  
    <div className="container">

        <motion.div 
        initial={{ opacity: 0, x: -175 }}
        animate={{ opacity:1, x: 0 }}
        transition={{ duration: 450, delay: 0.5, type: 'spring', stiffness: 120 }}
        className="banner-info">
            <h1 id="name">Borislav Dukov</h1>
            <h2 className="red-text">Web Developer</h2>
            <p id='name-info'> </p>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 175 }}
        animate={{ opacity:1, y: 0 }}
        transition={{ duration: 450, delay: 0.5, type: 'spring', stiffness: 120 }}
        className="banner-image">
            {/* <div className='img-container' id="image1">
            <img src="./dukov.png" alt=""/>
            </div> */}
            <div className='img-container' id="image2">
            <img src="./dukov.png" alt=""/>
            </div>
        </motion.div>
        <motion.div 
                initial={{ opacity: 0, x: 175 }}
                animate={{ opacity:1, x: 0 }}
                transition={{ duration: 450, delay: 0.5, type: 'spring', stiffness: 120 }}
        className="banner-info2">
            <h1>{codeStr}</h1>
            <h1>design</h1>
        </motion.div>

    </div>
</div>
</div>
        </>
    );
}