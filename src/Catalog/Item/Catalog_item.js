import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getShoebyId } from "../api";
import {useDispatch} from 'react-redux';
import {addToCart} from "../../redux/actions";

const Item_catalog = () => {
    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState([]);
    const [countableFieldValue, setCountableFieldValue] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const shoe = await getShoebyId(id);
            console.log(shoe.image)
            setSelectedItem(shoe);
        }

        fetchData();
    }, [id]);

    const handleAddToCart = () => {
        dispatch(addToCart(selectedItem, countableFieldValue));
    };


    const handleCountableFieldChange = (e) => {
        const newValue = Math.max(Number(e.target.value), 0);
        setCountableFieldValue(newValue);
    };

    return (
        <div className="item_card">
            <div className="item_photo">
                <img src={selectedItem.image} alt={selectedItem.title} />
                <div className="Item_pharagraph">
                    <h1>{selectedItem.title}</h1>
                    <p className="text_item">{selectedItem.text}</p>
                    <div className="item_filter">
                        <div className="filters">
                            <h4 className="filter1">Countable field</h4>
                            <input
                                type="number"
                                className="Countable_field"
                                value={countableFieldValue}
                                onChange={handleCountableFieldChange}
                            />
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
                    <Link to="/catalog" className="Go_back">Go back</Link>
                    <Link to="/catalog/shopping" className="Add_cart" onClick={handleAddToCart}>Add to cart</Link>
                </div>
            </div>
        </div>
    );
};

export default Item_catalog;
