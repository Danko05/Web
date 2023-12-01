import React from "react";
import {Link} from "react-router-dom";
    const Shopping = () => (



        <div>

            <div className="shopping_button">
                <Link to="/catalog" className="Back_to_catalog">Back to catalog</Link>
                <Link to="/" className="Continue">Continue</Link>
            </div>
        </div>
    );

export default Shopping;
