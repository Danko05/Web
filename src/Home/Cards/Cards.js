import React, {useState} from "react";
import shoes1 from '../../images/shoes1.png';
import shoes2 from '../../images/shoes2.png';
import shoes3 from '../../images/shoes3.png';
import shoes4 from '../../images/shoes3.png';
import Card from "../Card/Card";
import Button from "../Button/Button";




const shoeData = [
    {
        id: 1,
        image: shoes1,
        title: "Nike Air Ships",
        text: "Червоно-білі кросівки Nike Air Ships, що належали зірці американського баскетболу Майклу Джордану, продали на аукціоні за $1,47 млн. Це найдорожче взуття Nike",
    },
    {
        id: 2,
        image: shoes2,
        title: "Nike Cortez",
        text: "американські олімпійці вперше 'показали' кросівки Nike Cortez на Олімпійських іграх в Мюнхені. Тим самим продемонструвавши бренд Nike всьому світу.",
    },
    {
        id: 3,
        image: shoes3,
        title: "Air Force",
        text: "Вперше кросівки Air Force 1 випустили 1982 року. Вони призначалися професійних баскетболістів. Модель AF1 - класичний символ стрітстайлу.",
    },
    {
        id: 4,
        image: shoes4,
        title: "Air Force",
        text: "Вперше кросівки Air Force 1 випустили 1982 року. Вони призначалися професійних баскетболістів. Модель AF1 - класичний символ стрітстайлу.",
    },
    {
        id: 5,
        image: shoes1,
        title: "Nike Air Ships",
        text: "Червоно-білі кросівки Nike Air Ships, що належали зірці американського баскетболу Майклу Джордану, продали на аукціоні за $1,47 млн. Це найдорожче взуття Nike",
    },
    {
        id: 6,
        image: shoes2,
        title: "Nike Cortez",
        text: "американські олімпійці вперше 'показали' кросівки Nike Cortez на Олімпійських іграх в Мюнхені. Тим самим продемонструвавши бренд Nike всьому світу.",
    },
    {
        id: 7,
        image: shoes3,
        title: "Air Force",
        text: "Вперше кросівки Air Force 1 випустили 1982 року. Вони призначалися професійних баскетболістів. Модель AF1 - класичний символ стрітстайлу.",
    },
    {
        id: 8,
        image: shoes4,
        title: "Air Force",
        text: "Вперше кросівки Air Force 1 випустили 1982 року. Вони призначалися професійних баскетболістів. Модель AF1 - класичний символ стрітстайлу.",
    }
];




const Cards = () => {
    const [visibleShoes, setVisibleShoes] = useState(4);

    function loadMoreShoes  ()  {
        setVisibleShoes(shoeData.length);
    }

    return (


        <div className="View_more">
            <div className="Card-shoes">
                {shoeData.slice(0, visibleShoes).map((shoe) => (
                    <Card key={shoe.id} shoe={shoe} />
                ))}
            </div>
            <Button onClick={loadMoreShoes}></Button>
        </div>

    );
};

export default Cards;
