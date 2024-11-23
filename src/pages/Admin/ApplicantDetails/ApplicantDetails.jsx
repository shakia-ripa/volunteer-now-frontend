import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

const ApplicantDetails = () => {


    const { id } = useParams();
    console.log(id);
    const [user, setUser] = useState(null);
    const [booking, setBooking] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/booking/${id}`);
                const { data } = response.data
                console.log(response);
                setBooking(data);
                const userData = data.userId;
                setUser(userData);
                setLoading(false);
            } catch (err) {
                setError('Error fetching data');
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

    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
                <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg">
                    <div className="p-6 bg-gray-800 text-white">
                        <h2 className="text-3xl font-bold text-center">User Details</h2>
                    </div>
                    <div className="p-6 space-y-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-600">Name:</h3>
                            <p className="text-lg text-gray-800">{user.name}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-600">Email:</h3>
                            <p className="text-lg text-gray-800">{user.email}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-600">Emergency Contact:</h3>
                            <p className="text-lg text-gray-800">{user.phoneNumber}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-600">Emergency Contact:</h3>
                            <p className="text-lg text-gray-800">{booking.emergencyContactNo}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-600">Volunteer Experience:</h3>
                            <p className="mt-2 text-gray-800">{booking.volunteerExperience}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-600">Why Do You Want to Volunteer?</h3>
                            <p className="mt-2 text-gray-800">{booking.whyDoYouWantToVolunteer}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 p-6">
                        <Link to='/admin/applied-list'>
                            <button className="btn btn-outline  px-6 py-2 font-semibold ">
                                Back
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicantDetails;