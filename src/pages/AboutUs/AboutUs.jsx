import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
    return (
        <div className='min-h-svh'>
            <Helmet>
                <title>VolunteerNow | About Us</title>
            </Helmet>
            <h2 className="text-5xl">About Us</h2>
        </div>
    );
};

export default AboutUs;