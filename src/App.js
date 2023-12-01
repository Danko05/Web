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
import Item_catalog from "./Catalog/Item/Catalog_item";
import Bottom from "./Home/Bottom/Bottom";
import Header from "./Home/Header/Header";
import Shopping from "./Catalog/Shopping_card/shopping_card";
import './Catalog/Shopping_card/shopping_card.css';

  function App() {





    return (


            <Router>
                <div>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/Catalog" element={<Catalog/>} />
                        <Route path="/item/:id" element={<Item_catalog/>} />
                        <Route path="catalog/shopping" element={<Shopping/>} />
                    </Routes>
                    <Bottom/>
                </div>
            </Router>


    );
  }

export default App;
