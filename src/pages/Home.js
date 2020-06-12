import React, { useEffect } from 'react';
// import API from "../utils/API";
import Jumbo from '../components/Jumbo';
import SearchBar from  '../components/SearchBar';
import InfoGrid from '../components/InfoGrid';
import ResultsSection from '../components/ResultsSection';

function Home () {

    useEffect(() => {
        // API.getProducts().then(res => {
        //     console.log(res);
        // })
    }, [])

    return (
        <div>
            <Jumbo />
            <InfoGrid />
            <SearchBar />
            <ResultsSection />
        </div>
    )
}

export default Home;