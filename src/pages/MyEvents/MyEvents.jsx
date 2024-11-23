import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import api from '../../Routes/baseApi';

const MyEvents = () => {

    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/booking/my-events',
                    {
                        headers: {
                            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzMyNDIwMmEwZWM1MjQzOTgzZTdiYWIiLCJlbWFpbCI6ImphbmUuZG9lQGV4YW1wbGUuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MzIzNjczMzMsImV4cCI6MTczMjM3MDkzM30.8CkjMlej4nKqiXQS4s5gzvYtYGcg5ALVpSojlznQi8M', // Add token here
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

                <div className="overflow-x-auto shadow-md rounded-lg">
                    <table className="table w-full border-collapse">
                        {/* Table Header */}
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="py-4 px-6 text-left font-semibold">Event</th>
                                <th className="py-4 px-6 text-left font-semibold">Date</th>
                                <th className="py-4 px-6 text-left font-semibold">Description</th>
                                <th className="py-4 px-6 text-center font-semibold">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking, idx) => {
                                const date = new Date(booking.eventId.eventDate);
                                const formattedDate = date.toLocaleDateString("en-GB");

                                return (
                                    <tr
                                        key={idx}
                                        className={`hover:bg-gray-50 border-b ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                                            }`}
                                    >
                                        <td className="py-4 px-6">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-12 h-12">
                                                    <img
                                                        src={booking.eventId.imageURL}
                                                        alt="Event"
                                                        className="rounded-lg object-cover w-full h-full"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-900">{booking.eventId.eventTitle}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-gray-700">{formattedDate}</td>
                                        <td className="py-4 px-6 text-sm text-gray-600">
                                            {booking.eventId.description.substring(0, 50)}...
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            <span
                                                className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${booking.status === "pending"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : booking.status === "approved"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-red-100 text-red-700"
                                                    } capitalize`}
                                            >
                                                {booking.status || "N/A"}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyEvents;