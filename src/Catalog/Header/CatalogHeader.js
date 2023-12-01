import React from "react";
import {  NavLink } from "react-router-dom";
import nike from '../../images/nike.png';





const CatalogHeader = () => (
    <div>
        <hr className="horizontal-line"></hr>
        <div className="header">
            <div className="header-logo">
                <img src={nike} alt="logo"/>
            </div>

            <ul className="nav-list">
                <div className="Home-button">
                    <li>

                        <NavLink to="/" activeClassName="selected" >Home</NavLink>
                    </li>
                </div>

                <li>
                    <NavLink  to="/catalog" activeClassName="selected">Catalog</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
                </li>
            </ul>

        </div>
        <hr className="horizontal-line"></hr>
    </div>

);

export default CatalogHeader;
