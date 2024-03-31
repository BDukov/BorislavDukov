import { Routes, Route } from 'react-router-dom';

import './App.css'

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';


function App() {


  return (
    <>
    <Header></Header>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>

    <Footer></Footer>
    </> 
  )
}

export default App
