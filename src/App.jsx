import { Routes, Route } from 'react-router-dom';

import './App.css'

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';


function App() {


  return (
    <>
    <Header></Header>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contacts' element={<Contacts></Contacts>}></Route>
    </Routes>

    <Footer></Footer>
    </> 
  )
}

export default App
