import './Home.css';

import Banner from '../../components/Banner/Banner';
import Projects from '../../components/Projects/Projects';

export default function Home(){

    return(
        <>
            <Banner></Banner>
            <Projects></Projects>
            <div className="container">
            </div>
        </>
    );
}