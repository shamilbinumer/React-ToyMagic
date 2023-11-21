
import './App.css'
import Navbar from './component/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/body/Home/Home'
import About from './component/body/About/About'
import Contact from './component/body/Contact/Contact'
import { Link } from 'react-router-dom'
import Products from './component/body/Products/Products'
import Footer from './component/Footer/Footer'


function App() {

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/contact' Component={Contact}/>
      <Route path='/products' Component={Products}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
