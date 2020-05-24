import React, {useState, useEffect} from 'react';
import API from "../utils/API";
import Jumbo from '../components/Jumbo';
import SearchBar from  '../components/SearchBar';
import Grid from '../components/Grid';

function Home () {

    useEffect(() => {
        // API.getProducts().then(res => {
        //     console.log(res);
        // })
    }, [])

    return (
        <div>
            <Jumbo />
            <Grid />
            <SearchBar />
        </div>
    )
}

export default Home;