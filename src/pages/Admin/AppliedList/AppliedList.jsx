import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
const AppliedList = () => {

    const [bookings, setBookingss] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/booking');
                console.log(response.data.data);
                setBookingss(response.data.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    console.log(bookings);

    return (
        <div className='h-full'>
            <Helmet>
                <title>VolunteerNow | Applied</title>
            </Helmet>
            <h2 className="bg-white pl-8 py-4 text-2xl font-medium">Applied List</h2>
            <div className='bg-[#edeff2] rounded-tl-md lg:h-[89%] px-10 pt-3'>
                <div className='bg-white px-5 py-5 mt-7 rounded-xl'>
                    <div className="overflow-x-auto bg-white rounded-md">
                        <table className="table table-fixed w-full">
                            {/* head */}
                            <thead>
                                <tr className='text-center'>
                                    <th className="w-[3%]"></th>
                                    <th className="w-[12%]">Name</th>
                                    <th className="w-[12%]">Event</th>
                                    <th className="w-[12%]">Email</th>
                                    <th className="w-[12%]">Phone</th>
                                    <th className="w-[11%]">Experience</th>
                                    <th className="w-[10%]">Status</th>
                                    <th className="w-[5%]"></th>
                                </tr>
                            </thead>
                            <tbody className='text-sm'>
                                {
                                    bookings.map((booking, index) => {
                                        const {_id, eventId, userId, volunteerExperience, status } = booking;
                                        const eventDate = new Date(event?.eventDate);
                                        const formattedDate = eventDate.toLocaleDateString('en-GB');
                                        return (
                                            <tr key={booking._id} className='text-center'>
                                                <td>{index + 1}</td>
                                                <td>{userId.name}</td>
                                                <td>{eventId.eventTitle}</td>
                                                <td className="truncate">{userId.email}</td>
                                                <td>{userId.phoneNumber}</td>
                                                <td className="truncate">{volunteerExperience}</td>
                                                <td>{status}</td>
                                                <td>
                                                    <Link to={`/admin/applied-list/applicant-details/${_id}`}>
                                                        <button className=" text-lime-600 md:text-lg font-bold p-2 rounded-lg">
                                                            <FaEye />
                                                        </button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedList;