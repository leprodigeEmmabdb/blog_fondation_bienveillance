import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/Header';
import Index from './pages/Index'
import Contact from './pages/Contact';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Article from './pages/Article';
import Footer from './components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';


function App() {
    Aos.init();
    return (
        <div className="col">
            <Router>
                <Routes>
                    <Route path='/'
                        element={<Header/>}>
                        <Route index
                            element={<Index/>}/>
                        <Route path='/contact'
                            element={<Contact/>}/>
                            <Route path='/about' element={<About/>}/>
                            <Route path='/article' element={<Article/>}/>
                    </Route>

                </Routes>
            </Router>
            <Router>
                <Routes>
                    <Route path='/'
                        element={<Footer/>}>
                        <Route index
                            element={<Index/>}/>
                        <Route path='/contact'
                            element={<Contact/>}/>
                            <Route path='/about' element={<About/>}/>
                            <Route path='/article' element={<Article/>}/>
                    </Route>

                </Routes>
            </Router>
            
        </div>
    );
}

export default App;
