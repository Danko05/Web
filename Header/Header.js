import React from "react";
import {StyleHeader} from "Header.style";
import {BrowserRouter as Router,Swich,Route,NavLink} from"react-router-dom"
import Home from '../Home/Home';
const Header = () =>(
    <Router>
        <ul>
            <li>
                <NavLink exact to="/" activeClassName="selected">Home</NavLink>
            </li>
            <li>
                <NavLink exact to="/catalog" activeClassName="selected">Catalog</NavLink>
            </li>
            <li>
                <NavLink exact to="/contact" activeClaaName="selected">Contact</NavLink>
            </li>
        </ul>

        <Swich>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/catalog">
                <div>Hello it is a catalog</div>
            </Route>
            <Route path = "/contact">
                <div>Hello it is a contact</div>
            </Route>
        </Swich>
    </Router>
);
export default Header