import React from "react";
import Header from "./Header/Header";
import Bottom from "./Bottom/Bottom";
import Main from "./Main/Main";

import Button from "./Button/Button";

import Cards from "./Cards/Cards";



function Home() {

    return (
        <div>
            <Header/>
            <Main/>
            <Button/>
            <Cards/>
            <Bottom/>

        </div>
    )
}

export default Home;