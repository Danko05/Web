import React from "react";
import creator from '../../images/creator.png'
const Main = () =>(
    <div className="Main">
                <img src ={creator} alt="photos" />
        <div className="Main-pharagraph">
            <h1 className="Main-title">Історія</h1>
            <h2 className="Main-text">Бренд Nike був заснований в 1964 році студентом <br/>
                Орегонського університету Філом Найтом та <br/>
                його тренером Біллом Бауерманом. Перша назва компанії <br/>
                була "Blue Ribbon Sports" (BRS), і вони розпочали <br/>
                свою діяльність як дистриб'ютор спортивного взуття <br/>
                в США для японського виробника Onitsuka Tiger (зараз ASICS).<br/>
                Вони розпочали продавати взуття на біговому треку та волейболу.</h2>
        </div>
    </div>
);
export default Main