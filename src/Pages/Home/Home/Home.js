import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import HotDeals from '../HotDelas/HotDeals';
import Places from '../Places/Places/Places';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Places></Places>
            <HotDeals></HotDeals>
        </div>
    );
};

export default Home;