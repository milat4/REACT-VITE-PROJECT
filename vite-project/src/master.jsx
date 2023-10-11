import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Index from './pages/index';
import About from './pages/about';
import Contact from './pages/contact';

function Master(){
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" Component={Index}/>
            <Route path="/about" Component={About}/>
            <Route path="/contact" Component={Contact}/>

        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default Master;