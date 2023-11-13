
import React, { useState } from "react";
import Card from "../Card/Catalog_Card";
import Select from '../select';
import CatalogShoes from "../Card/Catalog_cards";
import {selectOptions} from "@testing-library/user-event/dist/select-options";


const priceOptions = [
    { label: 'Price', value: 'Price' },
    { label: 'less 100$', value: 'less_100' },
    { label: '100$-500$', value: '100_500' },
    { label: 'more 500$', value: 'more_500' },
];

const modelOptions = [
    { label: 'Model', value: 'Title' },
    { label: 'Air Ships', value: 'Nike_Air_Ships' },
    { label: 'Cortez', value: 'Nike_Cortez' },
    { label: 'Air Force', value: 'Air_Force' },
];

const sizeOptions = [
    { label: 'Size', value: 'Type' },
    { label: '36-40', value: 'Product 1' },
    { label: '41-43', value: 'Product 2' },
    { label: '44-46', value: 'Product 3' },
];



function FilterCatalog() {
    const [selectedOption, setSelectedOption] = useState('all');
    const [selectedOption2, setSelectedOption2] = useState('all');
    const [selectedOption3, setSelectedOption3] = useState('all');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleOptionChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };

    const handleOptionChange3 = (event) => {
        setSelectedOption3(event.target.value);
    };

    const filteredShoes = CatalogShoes.filter(shoe => {
        return (selectedOption === 'all' || shoe.price === selectedOption) &&
            (selectedOption2 === 'all' || shoe.title === selectedOption2) &&
            (selectedOption3 === 'all' || shoe.type === selectedOption3);
    });




    let arr_options = [
        {
            value:selectOptions,
            options:priceOptions,
            onChange:handleOptionChange,

        },

        {
            value:selectedOption2,
            options:modelOptions,
            onChange:handleOptionChange2,

        },

        {
            value:selectedOption3,
            options:sizeOptions,
            onChange:handleOptionChange3,

        }

    ]



    return (
        <div className="filter_catalog">
            <div className="filters">
                <div className="header_catalog__nav1">
                    {arr_options.map((select, index) => (
                        <div className="select_filter" key={index}>
                            <Select
                                options={select.options}
                                value={select.value}
                                onChange={select.onChange}
                            />
                        </div>
                    ))}
                    <a href="#" className="button_apply">Apply</a>
                </div>
            </div>
                <div className="Card-shoes">
                    {filteredShoes.map((shoe) => (
                        <Card key={shoe.id} shoe={shoe} />
                    ))}
                </div>
        </div>
    );
}

export default FilterCatalog;

