import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';

const EventList = () => {

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

    return (
        <div className='h-full'>
            <Helmet>
                <title>VolunteerNow | Events</title>
            </Helmet>
            <h2 className="bg-white pl-8 py-4 text-2xl font-medium">Event List</h2>
            <div className='bg-[#edeff2] rounded-tl-md lg:h-[89%] px-10 pt-8'>
                <div className="overflow-x-auto bg-white rounded-md p-3">
                    <table className="table table-fixed w-full">
                        {/* head */}
                        <thead>
                            <tr className='text-center'>
                                <th className="w-[5%]"></th>
                                <th className="w-[12%]">Name</th>
                                <th className="w-[12%]">Organization Name</th>
                                <th className="w-[19%]">Contact</th>
                                <th className="w-[11%]">Location</th>
                                <th className="w-[10%]">Event Date</th>
                                <th className="w-[10%]">Volunteers</th>
                                <th className="w-[5%]"></th>
                            </tr>
                        </thead>
                        <tbody className='text-sm'>
                            {
                                events.map((event, index) => {
                                    const eventDate = new Date(event?.eventDate);
                                    const formattedDate = eventDate.toLocaleDateString('en-GB');
                                    return (
                                        <tr key={event._id} className='text-center'>
                                            <td>{index + 1}</td>
                                            <td>{event.eventTitle}</td>
                                            <td>{event.organizationName}</td>
                                            <td className="truncate">{event.contactEmail}</td>
                                            <td className="truncate">{event.eventLocation}</td>
                                            <td>{formattedDate}</td>
                                            <td>{event.numOfVolunteers}</td>
                                            <td>
                                                <button className=" text-lime-600 md:text-lg font-bold p-2 rounded-lg">
                                                    <FaEdit />
                                                </button>
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
    );
};

export default EventList;


