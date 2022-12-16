import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// common components
/* add common components like header and footer here */

// content components
/* add content components here */
import Home from './Views/content/home';


// Styles and fonts
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

// JavaScript Libraries
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
