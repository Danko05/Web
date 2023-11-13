import React from "react";
import Bottom from "../Home/Bottom/Bottom";
import './Filter/Catalog_filter.css'
import './Card/Catalog_Cards.css'
import Cards from "./Filter/Catalog_filter";
import '../Catalog/Header/CatalogHeader.css'
import CatalogHeader from "./Header/CatalogHeader";








function Catalog() {

    return (
        <div>
            <CatalogHeader/>
            <Cards/>
            <Bottom/>


        </div>
    )
}

export default Catalog;