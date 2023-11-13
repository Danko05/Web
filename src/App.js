import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import './Home/Header/Header.css'
import'./Home/Main/Main.css'
import './Home/Cards/Cards.css'
import './Home/Button/Button.css'
import './Home/Bottom/Bottom.css'
import Home from "./Home/Home";
import Catalog from "./Catalog/Catalog";
import './Catalog/Filter/Catalog_filter.css'

  function App() {
    return (

            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/Catalog" element={<Catalog/>} />

                    </Routes>
                </div>
            </Router>


    );
  }

export default App;
