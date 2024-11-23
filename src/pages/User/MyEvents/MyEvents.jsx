import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import api from '../../../Routes/baseApi';

const MyEvents = () => {

    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/booking/my-events',
                    {
                        headers: {
                            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzMyNDIwMmEwZWM1MjQzOTgzZTdiYWIiLCJlbWFpbCI6ImphbmUuZG9lQGV4YW1wbGUuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MzIzNDc2NzIsImV4cCI6MTczMjM1MTI3Mn0.oK6ru-xMvrq0fUabQN7NOqKVlFZoy8wtsI_Fv5b9ptw', // Add token here
                        }
                    }
                );
                console.log(response.data.data);
                const { data } = response.data
                console.log(data);
                setBookings(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []);
    console.log(bookings.length);

    return (
        <div className='h-full'>
            <Helmet>
                <title>VolunteerNow | My Event</title>
            </Helmet>
            <h2 className="bg-white pl-8 py-4 text-2xl font-medium">My Events</h2>
            <div className='bg-[#edeff2] rounded-tl-md px-7 py-7'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                    {
                        bookings?.map((booking, idx) => {
                            const date = new Date(booking.eventId.eventDate);
                            const formattedDate = date.toLocaleDateString('en-GB');
                            return (
                                <div key={idx} className="card bg-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">

                                    <img
                                        className="w-full h-40 object-cover rounded-t-lg"
                                        src={booking.eventId.imageURL}
                                        alt="Event"
                                    />

                                    <div className="card-body p-6">

                                        <h3 className="text-xl font-bold text-gray-900">{booking.eventId.title}</h3>
                                        <p className="text-sm text-gray-500">Event Date: {formattedDate}</p>

                                        <p className="text-gray-700 mt-2">
                                            {booking.eventId.description.substring(0, 100)}...
                                        </p>

                                        <div className="mt-2 flex items-center justify-between">
                                            <span className={` ${booking.status === 'pending' ? 'bg-yellow-500' : booking.status === 'approved' ? 'bg-green-500' : 'bg-red-500'} text-white px-3 py-1 rounded-full font-medium text-sm capitalize `}>
                                                {booking.status || 'N/A'} {/* Display 'N/A' or fallback if status is not available */}
                                            </span>

                                            <button className=" bg-lime-700 hover:bg-lime-800  transition-colors text-white md:text-mdd font-semibold py-2 px-4 rounded-lg"> View Details</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    );
};

export default MyEvents;