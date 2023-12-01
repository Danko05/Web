import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {getShoebyId} from "../api";

const Item_catalog = () => {
    const {id} = useParams();
    const [selectedItem, setSelectedItem] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const shoe = await getShoebyId(id);
            console.log(shoe.image)
            setSelectedItem(shoe);
        }

        fetchData();
    }, []);


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
                    <Link to="/catalog/shopping" className="Add_cart" >Add to cart</Link>
                </div>
            </div>


        </div>
    )
}

export default Item_catalog;