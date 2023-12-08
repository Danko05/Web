import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { clearAllItems, removeFromCart, updateQuantity } from "../../redux/actions";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
    const cartItems = useSelector(state => state.cartItems);
    const dispatch = useDispatch();

    const handleClearAll = () => {
        const shouldClear = window.confirm("Видалити всі елементи з кошика?");
        if (shouldClear) {
            dispatch(clearAllItems());
        }
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity === 0) {
            const shouldRemove = window.confirm("Видалити?");
            if (shouldRemove) {
                dispatch(removeFromCart(productId));
            }
        } else {
            dispatch(updateQuantity(productId, newQuantity));
        }
    };

    const handleDeleteItem = (productId) => {
        const shouldDelete = window.confirm("Видалити цей елемент з кошика?");
        if (shouldDelete) {
            dispatch(removeFromCart(productId));
        }
    };

    return (
        <div>
            <h1 className="Shopping_title">Shopping card</h1>
            <div className="shopping_item">
                {cartItems.length > 0 && (
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <Link to={`/item/${item.id}`}>
                                    <img src={item.image} alt={item.title} />
                                </Link>
                                <div className="button_title">
                                    <Link to={`/item/${item.id}`} className="shopping_title">{item.title}</Link>
                                    <div className="Plus_minus">
                                        <button className="Plus" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                                        <p>{item.quantity}</p>
                                        <button className="Minus" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                        <button className="Delete" onClick={() => handleDeleteItem(item.id)}>Delete</button>
                                    </div>
                                    <span>{"$"+item.price * item.quantity}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                {cartItems.length > 0 && (
                    <div className="buttons_shopping">
                        <div className="left_buttons">
                            <Link to="/catalog" className="Back_to_catalog">Back to catalog</Link>
                            <button className="Clear_all" onClick={handleClearAll}>Clear all</button>
                        </div>
                        <span className="Total_price">Total price: {"$"+calculateTotalPrice()}</span>
                        <Link to="/Checkout" className="Continue">Continue</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ShoppingCart;
