import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import api from '../../../Routes/baseApi';
import Swal from 'sweetalert2';

const AppliedList = () => {
    const [bookings, setBookings] = useState([]);

    // Fetch bookings on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/booking');
                setBookings(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchData();
    }, []);

    // Update booking status
    const handleStatusChange = async (bookingId, newStatus) => {
        try {
            const response = await api.put('/booking/booking-status', {
                bookingId,
                status: newStatus,
            });

            console.log("Status updated successfully:", response.data);
            console.log(bookingId, newStatus)
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Status updated successfully!",
                showConfirmButton: false,
                timer: 1500
              });

            // Update state with the new status
            setBookings((prevBookings) =>
                prevBookings.map((booking) =>
                    booking._id === bookingId ? { ...booking, status: newStatus } : booking
                )
            );
        } catch (error) {
            console.error("Error updating status:", error.response?.data || error.message);
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Failed to update status.",
                showConfirmButton: false,
                timer: 1500
              });
        }
    };

    return (
        <div className="h-full">
            <Helmet>
                <title>VolunteerNow | Applied</title>
            </Helmet>
            <h2 className="bg-white pl-8 py-4 text-2xl font-medium">Applied List</h2>
            <div className="bg-[#edeff2] rounded-tl-md lg:h-[89%] px-10 pt-3">
                <div className="bg-white px-5 py-5 mt-7 rounded-xl">
                    <div className="overflow-x-auto bg-white rounded-md">
                        <table className="table table-fixed w-full">
                            <thead>
                                <tr className="text-center">
                                    <th className="w-[3%]"></th>
                                    <th className="w-[10%]">Name</th>
                                    <th className="w-[12%]">Event</th>
                                    <th className="w-[12%]">Email</th>
                                    <th className="w-[12%]">Phone</th>
                                    <th className="w-[11%]">Experience</th>
                                    <th className="w-[12%]">Status</th>
                                    <th className="w-[5%]"></th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {bookings.map((booking, index) => {
                                    const { _id, eventId, userId, volunteerExperience, status } = booking;

                                    return (
                                        <tr key={_id} className="text-center">
                                            <td>{index + 1}</td>
                                            <td>{userId?.name || "N/A"}</td>
                                            <td>{eventId?.eventTitle || "N/A"}</td>
                                            <td className="truncate">{userId?.email || "N/A"}</td>
                                            <td>{userId?.phoneNumber || "N/A"}</td>
                                            <td className="truncate">{volunteerExperience || "N/A"}</td>
                                            <td>
                                                <select
                                                    value={status}
                                                    onChange={(e) => handleStatusChange(_id, e.target.value)}
                                                    className="select select-bordered"
                                                >
                                                    <option value="pending">Pending</option>
                                                    <option value="approved">Approved</option>
                                                    <option value="rejected">Rejected</option>
                                                </select>
                                            </td>
                                            <td>
                                                <Link to={`/admin/applied-list/applicant-details/${_id}`}>
                                                    <button className="text-lime-600 md:text-lg font-bold p-2 rounded-lg">
                                                        <FaEye />
                                                    </button>
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedList;
