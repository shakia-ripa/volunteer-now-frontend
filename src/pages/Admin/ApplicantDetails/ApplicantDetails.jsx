import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import api from '../../../Routes/baseApi';

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
        const response = await api.get(`/booking/${id}`);
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
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-6">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-lime-500 to-lime-700 p-6 text-center text-white">
            <h1 className="text-3xl font-extrabold">Applicant Profile</h1>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm font-bold text-gray-600">Name</p>
                <p className="text-lg font-semibold text-gray-800">Jane Doe</p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-600">Email</p>
                <p className="text-lg font-semibold text-gray-800">jane.doe@example.com</p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-600">Emergency Contact</p>
                <p className="text-lg font-semibold text-gray-800">+8801778772882</p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-600">Alternate Contact</p>
                <p className="text-lg font-semibold text-gray-800">+1234567890</p>
              </div>
            </div>
            <hr className="border-gray-200 mb-6" />
            <div>
              <h3 className="text-lg font-bold text-lime-600 mb-2">Volunteer Experience</h3>
              <p className="text-gray-700">Worked as a community organizer for 2 years.</p>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold text-lime-600 mb-2">Why Do You Want to Volunteer?</h3>
              <p className="text-gray-700">
                I am passionate about helping people and want to contribute to making this event successful.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 p-4">
            <Link to='/admin/applied-list'>
              <button class="px-6 py-2 text-white bg-lime-600 rounded-lg shadow hover:bg-lime-700 transition">
                Back to List
              </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDetails;