
import React, { useState } from "react";
import Card from "../Card/Catalog_Card";
import Select from '../select';
import CatalogShoes from "../Card/Catalog_cards";



const priceOptions = [
    { label: 'Price', value: JSON.stringify([0, 100000]) },
    { label: 'less 100$', value: JSON.stringify([0, 99]) },
    { label: '100$-500$', value: JSON.stringify([100, 500]) },
    { label: '501$-999$', value: JSON.stringify([501, 999]) },
    { label: 'more 1000$', value: JSON.stringify([1000, 100000]) },
];

const modelOptions = [
    { label: 'Model', value: 'all' },
    { label: 'Air Ships', value: 'Nike Air Ships' },
    { label: 'Cortez', value: 'Nike Cortez' },
    { label: 'Air Force', value: 'Air Force' },
];

const sizeOptions = [
    { label: 'Size', value: 'all' },
    { label: '41', value: 'Size: 41' },
    { label: '42', value: 'Size: 42' },
    { label: '43', value: 'Size: 43' },
];



function FilterCatalog() {
    const [selectedOption, setSelectedOption] = useState(JSON.stringify([0, 100000]));
    const [selectedOption2, setSelectedOption2] = useState('all');
    const [selectedOption3, setSelectedOption3] = useState('all');


    const [appliedOption, setAppliedOption] = useState(selectedOption);
    const [appliedOption2, setAppliedOption2] = useState(selectedOption2);
    const [appliedOption3, setAppliedOption3] = useState(selectedOption3);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleOptionChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };

    const handleOptionChange3 = (event) => {
        setSelectedOption3(event.target.value);
    };


    const handleApplyFilters = () => {
        setAppliedOption(selectedOption);
        setAppliedOption2(selectedOption2);
        setAppliedOption3(selectedOption3);
    };


    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredShoes = CatalogShoes.filter(shoe => {
        const [minPrice, maxPrice] =  JSON.parse(appliedOption);
        console.log(minPrice)
        return (minPrice <= shoe.price && shoe.price <= maxPrice)         &&
            (appliedOption2 === 'all' || shoe.title === appliedOption2) &&
            (appliedOption3 === 'all' || shoe.size === appliedOption3 )&&
            shoe.title.toLowerCase().includes(searchTerm.toLowerCase());
    });


    let arr_options = [
        {
            value:selectedOption,
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
            <div className="Search_shoes">
            <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search" />
            </div>
                {/*<div className="filters">*/}
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
                    <a href="#" className="button_apply" onClick={handleApplyFilters} >Apply</a>
                {/*</div>*/}
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












