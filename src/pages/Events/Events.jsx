import React, { useEffect, useState } from 'react';
import Event from '../../components/Event/Event';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const Events = () => {

    const [events, setEvents] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/event');
                console.log(response.data.data);
                setEvents(response.data.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    // console.log(events);
    return (
        <div className='w-11/12 mx-auto'>
            <Helmet>
                <title>VolunteerNow | Events</title>
            </Helmet>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:my-10'>
                {
                    events.map(event => <Event key={event._id} event={event}></Event>)
                }
            </div>


        </div>
    );
};

export default Events;