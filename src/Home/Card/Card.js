import React from "react";

const Card = ({ shoe }) => (
    <div className={`Card-shoes${shoe.id}`}>
        <div className={`Card_photo${shoe.id}`}>
            <img src={shoe.image} alt={`shoes${shoe.id}`} />
        </div>
        <h1 className={`Card-title${shoe.id}`}>{shoe.title}</h1>
        <h3 className={`Card-text${shoe.id}`}>{shoe.text}</h3>
    </div>
);

export default Card;
