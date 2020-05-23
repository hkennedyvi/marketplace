import React, {useState, useEffect} from 'react';
import API from "../utils/API";
import Jumbo from '../components/Jumbo';
import SearchBar from  '../components/SearchBar';

function Home () {

    useEffect(() => {
        // API.getProducts().then(res => {
        //     console.log(res);
        // })
    }, [])

    return (
        <div>
            <Jumbo />
            <SearchBar />
        </div>
    )
}

export default Home;