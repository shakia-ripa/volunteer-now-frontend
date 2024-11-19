import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner'
import Review from '../Review/Review';
import PopularEvents from '../PopularEvents/PopularEvents';

const Home = () => {
    return (
        <div className=''>
        <Helmet>
            <title>VolunteerNow | Home</title>
        </Helmet>
        <Banner></Banner>
        <PopularEvents></PopularEvents>
        <Review></Review>
        

    </div>
    );
};

export default Home;