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
import { Provider } from 'react-redux';
import {store} from './redux/store';
import './Catalog/Shopping_card/ShoppingCard.css'
import Checkout from "./Catalog/Checkout/checkout"
import './Catalog/Checkout/checkout.css'
import Success from "./Catalog/Success/success"
import './Catalog/Success/success.css'

  function App() {





    return (

        <Provider store={store}>
            <Router>
                <div>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/Catalog" element={<Catalog/>} />
                        <Route path="/item/:id" element={<Item_catalog/>} />
                        <Route path="catalog/shopping" element={<Shopping/>} />
                        <Route path="/Checkout" element={<Checkout/>} />
                        <Route path="/Success" element={<Success/>} />
                    </Routes>
                    <Bottom/>
                </div>
            </Router>
        </Provider>


    );
  }

export default App;
