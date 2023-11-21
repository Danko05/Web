import React from "react";

const Button = ({onClick}) => (

<div>
        <div className="Button-Container">
            <a href="#" className="Card-Button" onClick={(event) =>
                {event.preventDefault(); onClick();}}>View more</a>
        </div>
    </div>
);

export default Button;
