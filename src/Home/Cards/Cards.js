import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Loader from "../../Catalog/Loader/Loader";
import '../../Catalog/Loader/Loader.css';
import { getAllShoes } from "../../Catalog/api";

const Cards = () => {
    const [shoeData, setShoeData] = useState([]);

    const [visibleShoes, setVisibleShoes] = useState(4);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const allShoes = await getAllShoes();
            setShoeData(allShoes);
            setLoading(false);
        }

        fetchData();
    }, []);

    function loadMoreShoes() {
        setVisibleShoes(prevVisibleShoes => prevVisibleShoes + 4);
    }

    return (
        <div className="View_more">
            {loading ? (
                <Loader />
            ) : (
                <>
                    {Array.isArray(shoeData) && shoeData.length > 0 ? (
                        <div className="Card-shoes">
                            {shoeData.slice(0, visibleShoes).map((shoe) => (
                                <Card key={shoe.id} shoe={shoe} />
                            ))}
                        </div>
                    ) : (
                        <p>No shoes available</p>
                    )}
                    {visibleShoes-1 < shoeData.length && (
                        <Button onClick={loadMoreShoes}>Load More</Button>
                    )}
                </>
            )}
        </div>
    );
};

export default Cards;
