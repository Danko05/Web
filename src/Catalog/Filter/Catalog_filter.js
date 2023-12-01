
import React, {useEffect, useState} from "react";
import Card from "../Card/Catalog_Card";
import Select from '../select';
import CatalogShoes from "../Card/Catalog_cards";
import {getAllShoes, getFilteredShoes} from "../api";
import Loader from "../Loader/Loader";
import Cards from "../Filter/Catalog_filter";
import '../Loader/Loader.css'



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
    { label: 'Size', value: JSON.stringify([35, 45]) },
    { label: '35 - 41', value: JSON.stringify([35, 41]) },
    { label: '42 - 43', value: JSON.stringify([42, 43]) },
    { label: '44 - 45', value: JSON.stringify([44, 45]) },
];



function FilterCatalog() {
    const [catalogShoes, setCatalogShoes] = useState([]);
    const [selectedOption, setSelectedOption] = useState(JSON.stringify([0, 100000]));
    const [selectedOption2, setSelectedOption2] = useState('all');
    const [selectedOption3, setSelectedOption3] = useState(JSON.stringify([35, 45]));


    const [appliedOption, setAppliedOption] = useState(selectedOption);
    const [appliedOption2, setAppliedOption2] = useState(selectedOption2);
    const [appliedOption3, setAppliedOption3] = useState(selectedOption3);

    const [loading, setLoading] = useState(true);




    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleOptionChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };

    const handleOptionChange3 = (event) => {
        setSelectedOption3(event.target.value);
    };
    const [searchTerm, setSearchTerm] = useState('');
    const handleApplyFilters = () => {
        setAppliedOption(selectedOption);
        setAppliedOption2(selectedOption2);
        setAppliedOption3(selectedOption3);

        const [minPrice, maxPrice] = JSON.parse(selectedOption);
        const [minSize, maxSize] = JSON.parse(selectedOption3);

        getFilteredShoes(minPrice, maxPrice, minSize, maxSize, searchTerm)
            .then(response => {
                setCatalogShoes(response.data);
                console.log(response);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };
    useEffect(() => {


        handleApplyFilters();
    }, []);





    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredShoes = CatalogShoes.filter(shoe => {
        const [minPrice, maxPrice] =  JSON.parse(appliedOption);
        const [minSize, maxSize] =  JSON.parse(appliedOption3);
        return (minPrice <= shoe.price && shoe.price <= maxPrice)         &&
            (appliedOption2 === 'all' || shoe.title === appliedOption2) &&
            (minSize <= shoe.size && shoe.size <= maxSize )&&
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
                    {catalogShoes.map((shoe) => (
                        <Card key={shoe.id} shoe={shoe} />
                    ))}
                </div>
        </div>
    );
}



export default FilterCatalog;


