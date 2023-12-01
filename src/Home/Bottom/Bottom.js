import React from "react";
import nike from '../../images/nike.png';
import facebook from '../../images/Facebook.jpg';
import twiter from '../../images/Twiter.jpg';
import linkedIn from '../../images/LinkedIn.jpg';
import google from '../../images/Google.jpg';

const Bottom = () =>(
    <div>
        <hr className="horizontal-line2"></hr>
        <div className= "Bottom">
            <div className="Bottom-pharagraph">
                <h2 className="Bottom-title">Just do it</h2>
                <h3 className="Bottom-text">Just do it перетворився на маніфест, за допомогою<br/>
                    якого компанія Nike порушувала найгостріші <br/>
                    соціальні теми. Бренд звертав увагу на <br/>
                    </h3>
            </div>
            <div className="Bottom-logo">
                <img src={nike} alt="logo"/>
            </div>
            <div className="Bottom-icon">
                <img src={facebook} />
                <img src={twiter}/>
                <img src={linkedIn}/>
                <img src={google}/>
            </div>
        </div>

    </div>
)
export default Bottom