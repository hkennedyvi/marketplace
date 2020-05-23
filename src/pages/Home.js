import React, {useState, useEffect} from 'react';
import API from "../utils/API";
import Jumbo from '../components/Jumbo';

function Home () {

    useEffect(() => {
        API.getProducts().then(res => {
            console.log(res);
        })
    }, [])

    return (
        <div>
            <Jumbo />
        </div>
    )
}

export default Home;