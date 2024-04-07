// App.js
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './services/scrollToTop';

import './App.css'

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Projects from './pages/Projects/Projects';
import Services from './pages/Services/Services';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/services' element={<Services />}></Route>
      </Routes>
      <Footer />
      <ScrollToTop /> {/* Включване на компонента ScrollToTop тук */}
    </> 
  )
}

export default App;
