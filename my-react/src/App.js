import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from'./components/Contact';
import Prodacts from './components/Prodacts';
import Prodact from './components/Prodact';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='mainDiv'>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="About" element={<About /> } />
          <Route path="Contact" element={<Contact /> } />
          <Route path="Prodacts" element={<Prodacts />} />
          <Route path="Prodacts/:id" element={<Prodact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
