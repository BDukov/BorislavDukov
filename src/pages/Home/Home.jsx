
import usePageSEO from '../../hooks/userPageSEO';

import './Home.css';

import Banner from '../../components/Banner/Banner';
import Projects from '../../components/Projects/Projects';

export default function Home(){

    usePageSEO({
        title: 'Home page',
        description: 'About Borislav Dukov - Web Developer',
        keywords: ["home", 'borislav', 'dukov', 'web developer', 'developer'],
        ogTitle: 'Home page',
        ogDescription: 'Home page Borislav Dukov - Web Developer',
        ogImage: 'https://www.borislavdukov.com/Bdukov.png',
        ogUrl: 'https://borislavdukov.com/home'
      });

    return(
        <>
            <Banner></Banner>
            <Projects></Projects>
            <div className="container">
            </div>
        </>
    );
}