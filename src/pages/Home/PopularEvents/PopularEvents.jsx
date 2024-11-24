import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Event from '../../../components/Event/Event';
import { Link } from 'react-router-dom';
import api from '../../../Routes/baseApi';

const PopularEvents = () => {

    const [events, setEvents] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/event');
                setEvents(response.data.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); 
    }, []);

    return (

        <div className='my-20 w-11/12 mx-auto'>
            <h2 className="text-4xl text-center font-medium">Upcoming Volunteer Events</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:my-10'>
                {
                    events.map(event => <Event key={event._id} event={event}></Event>)
                }
            </div>
            <Link to='/events'>
                <div className='text-center'>
                    <button className='btn btn-ghost bg-lime-600 text-white text-lg font-semibold'>
                        View All
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default PopularEvents;