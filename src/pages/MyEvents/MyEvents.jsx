import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import api from '../../Routes/baseApi';
import AuthService from '../../Utils/auth.utils';
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import DashboardNav from '../Shared/DashboardNav/DashboardNav';

const MyEvents = () => {

    const { user, setUser } = useContext(AuthContext);
    console.log(user);
    const navigate = useNavigate();

    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/booking/my-events');
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


    const handleLogout = () => {
        AuthService.logOut();
        setUser(null)
        navigate('/')
    }

    return (
        <div className='h-full'>
            <Helmet>
                <title>VolunteerNow | My Event</title>
            </Helmet>
            <DashboardNav title={'Applied Events'} handleLogout={handleLogout}></DashboardNav>

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