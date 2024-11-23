


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoPeople, IoLocationSharp } from "react-icons/io5";
import { IoMdTimer } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { Helmet } from 'react-helmet-async';

const EventDetails = () => {

    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/event/${id}`);
                setEvent(response.data.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching event data');
                setLoading(false);
            }
        };

        fetchEventData();
    }, [id]);

    if (loading) {
        return <div className="text-center mt-10 text-lg font-medium">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-10 text-lg font-medium text-red-500">{error}</div>;
    }

    const {_id, eventTitle, description, eventLocation, eventDate, time, imageURL, numOfVolunteers } = event;
    const date = new Date(eventDate);
    const formattedDate = date.toLocaleDateString('en-GB');

    return (
        <div className='w-11/12 mx-auto mb-10 bg-gray-50 p-6 rounded-lg shadow-md'>
            <Helmet>
                <title>VolunteerNow | Event Details</title>
            </Helmet>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                <div className='md:col-span-2'>
                    <img className='h-[350px] w-full object-cover rounded-lg shadow-md' src={imageURL} alt={eventTitle} />
                </div>

                <div className='md:col-span-1 flex flex-col justify-center gap-4 bg-white p-4 rounded-lg shadow-md'>
                    <p className='flex items-center gap-2'>
                        <IoPeople className='w-6 h-6 text-lime-600' />
                        <span className='text-lg font-semibold'>{numOfVolunteers} Volunteers</span>
                    </p>
                    <p className='flex items-center gap-2'>
                        <IoLocationSharp className='w-6 h-6 text-lime-600' />
                        <span className='text-lg font-semibold'>{eventLocation}</span>
                    </p>
                    <p className='flex items-center gap-2'>
                        <MdDateRange className='w-6 h-6 text-lime-600' />
                        <span className='text-lg font-semibold'>{formattedDate}</span>
                    </p>
                    <p className='flex items-center gap-2'>
                        <IoMdTimer className='w-6 h-6 text-lime-600' />
                        <span className='text-lg font-semibold'>{time}</span>
                    </p>
                </div>
            </div>

            <div className='mt-6'>
                <h1 className='text-2xl font-bold text-gray-800'>Event: <span className='font-normal'>{eventTitle}</span></h1>
                <p className='text-lg font-semibold mt-4 text-gray-700 leading-relaxed'>Description: <span className='font-normal'>{description}</span></p>
            </div>

            <div className='mt-6'>
                <Link to={`/apply-form/${_id}`}>
                    <button className="bg-lime-600 hover:bg-lime-700 text-white md:text-lg font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl">
                        Apply Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EventDetails;

