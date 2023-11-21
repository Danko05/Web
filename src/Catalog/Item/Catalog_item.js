import React from "react";
import {Link, useParams} from "react-router-dom";
import CatalogShoes from '../Card/Catalog_cards'

const Item_catalog = () => {
    const {id} = useParams();
    const selectedItem = CatalogShoes.find((item) => item.id === parseInt(id));


    return (



        <div className="item_card">


            <div className="item_photo">
                <img src={selectedItem.image}/>
                <div className="Item_pharagraph">
                    <h1>{selectedItem.title}</h1>
                    <p className="text_item">{selectedItem.text}</p>
                    <div className="item_filter">
                        <div className="filters">
                            <h4 className="filter1">Countable field</h4>
                            <h3 className="Countable_field"></h3>
                        </div>
                        <div className="filters2">
                            <h4 className="filter2">Selectable field</h4>
                            <h3 className="Selectable_field"></h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item_bottom">
                <div className="Price_item">
                    <h3>{selectedItem.text1}</h3>
                    <h3>{selectedItem.price}</h3>
                </div>
                <div className="item_button">
                    <Link to="/catalog" className="Go_back" >Go back</Link>
                    <button className="Add_cart">Add to cart</button>
                </div>
            </div>

        </div>
    )
}

export default Item_catalog;