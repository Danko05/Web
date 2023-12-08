import React from "react";
import {Link} from "react-router-dom";
import success from '../../images/success.png';


const Success = () =>{
    return(
        <div>
            <div className="success_container">
            <img src={success}/>
            <div className="success_tittle">
                <h1 >Your order was send to processing!</h1>
            </div>
                <div className="success_tittle2">
                    <h1> Check your email box for further information</h1>
                </div>
            <Link to="/catalog" className="Go_back_success">Go back to Catalog</Link>
            </div>
        </div>
    )
}
export default Success