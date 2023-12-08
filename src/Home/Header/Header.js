import React from "react";
import {  NavLink } from "react-router-dom";
import nike from '../../images/nike.png';





const Header = () => (
    <div>
        <hr className="horizontal-line"></hr>
        <div className="header">
            <div className="header-logo">
                <img src={nike} alt="logo"/>

            </div>

            <ul className="nav-list">
                <div className="Home-button">
                    <li>
                        <NavLink exact to="/" activeClassName="selected">Home</NavLink>
                    </li>
                </div>

                <li>
                    <NavLink exact to="/catalog" activeClassName="selected">Catalog</NavLink>
                </li>
                <li>
                    <NavLink exact to="/catalog/shopping" activeClassName="selected">Shopping cart</NavLink>
                </li>
            </ul>

        </div>
        <hr className="horizontal-line"></hr>
    </div>

);

export default Header;
