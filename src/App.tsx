import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// common components
/* add common components like header and footer here */
import Header from './Views/components/header';
import Footer from './Views/components/footer';

// content components
/* add content components here */
import Home from './Views/content/home';
import Contact from './Views/content/contact';
import About from './Views/content/about';


// Styles and fonts
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

// JavaScript Libraries
import $ from 'jquery';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
