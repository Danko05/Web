import React from "react";

const Card = ({ shoe }) => (
    <div className={`Card-shoes${shoe.id}`}>
        <div className={`Card_photo${shoe.id}`}>
            <img src={shoe.image} alt={`shoes${shoe.id}`} />
        </div>
        <h1 className={`Card-title${shoe.id}`}>{shoe.title}</h1>
        <h3 className={`Card-text${shoe.id}`}>{shoe.text}</h3>
        <h2 className={`Card-text-price${shoe.id}`}>{shoe.text1}</h2>
        <h2 className={`Card-price${shoe.id}`}>{shoe.price}</h2>
        <button className={`Card-button${shoe.id}`}>{shoe.button}</button>
    </div>
);

export default Card;
