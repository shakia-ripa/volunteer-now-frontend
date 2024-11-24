import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import api from '../../../Routes/baseApi';
import profileImg from '../../../../src/assets/images/profile.png'

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
            <div className="min-h-screen bg-gray-100 flex items-center justify-center  py-10 px-4">
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



            <div>
  <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
    <div className="w-full max-w-4xl bg-white shadow-2xl rounded-lg overflow-hidden">
      {/* Header Section */}
      <div className="p-6 bg-blue-600 text-white">
        <h2 className="text-3xl font-bold text-center uppercase tracking-wide">
          User Details
        </h2>
      </div>

      {/* Content Section */}
      <div className="p-8 space-y-8">
        {/* User Details Grid */}
        <div className="grid grid-cols-2 gap-y-6 gap-x-8">
          <div>
            <h3 className="text-gray-500 font-semibold">Name</h3>
            <p className="text-gray-800 text-lg font-medium">{user.name}</p>
          </div>
          <div>
            <h3 className="text-gray-500 font-semibold">Email</h3>
            <p className="text-gray-800 text-lg font-medium">{user.email}</p>
          </div>
          <div>
            <h3 className="text-gray-500 font-semibold">Emergency Contact</h3>
            <p className="text-gray-800 text-lg font-medium">{user.phoneNumber}</p>
          </div>
          <div>
            <h3 className="text-gray-500 font-semibold">Alternate Contact</h3>
            <p className="text-gray-800 text-lg font-medium">{booking.emergencyContactNo}</p>
          </div>
        </div>

        {/* Volunteer Experience */}
        <div className="space-y-3">
          <h3 className="text-gray-500 font-semibold">Volunteer Experience</h3>
          <p className="text-gray-700 leading-relaxed">
            {booking.volunteerExperience || "No experience mentioned."}
          </p>
        </div>

        {/* Why Volunteer */}
        <div className="space-y-3">
          <h3 className="text-gray-500 font-semibold">
            Why Do You Want to Volunteer?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {booking.whyDoYouWantToVolunteer ||
              "No reason provided."}
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-100 border-t border-gray-200 p-6 flex justify-center">
        <Link to="/admin/applied-list">
          <button className="btn btn-primary px-8 py-3 font-semibold text-white rounded-lg shadow hover:shadow-lg transition-all">
            Back to List
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>





<div>
  <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-6">
    <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-6">
        <h2 className="text-4xl font-bold text-center">User Details</h2>
      </div>

      {/* Content */}
      <div className="p-8 space-y-8">
        {/* User Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">Name</span>
            <span className="text-lg font-semibold text-gray-800">{user.name}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">Email</span>
            <span className="text-lg font-semibold text-gray-800">{user.email}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">Emergency Contact</span>
            <span className="text-lg font-semibold text-gray-800">{user.phoneNumber}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">Alternate Contact</span>
            <span className="text-lg font-semibold text-gray-800">{booking.emergencyContactNo}</span>
          </div>
        </div>

        {/* Volunteer Experience */}
        <div className="space-y-2">
          <h3 className="text-gray-700 text-lg font-semibold">Volunteer Experience</h3>
          <p className="text-gray-600 text-base">
            {booking.volunteerExperience || "No experience provided."}
          </p>
        </div>

        {/* Why Volunteer */}
        <div className="space-y-2">
          <h3 className="text-gray-700 text-lg font-semibold">Why Do You Want to Volunteer?</h3>
          <p className="text-gray-600 text-base">
            {booking.whyDoYouWantToVolunteer || "No reason provided."}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 border-t border-gray-300 px-6 py-4 flex justify-center">
        <Link to="/admin/applied-list">
          <button className="btn bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition-all">
            Back to List
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>







<div>
  <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-6">
    <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-blue-600 text-white px-8 py-5">
        <h2 className="text-2xl font-semibold text-center">User Details</h2>
      </div>

      {/* Content */}
      <div className="p-8 space-y-6">
        {/* User Information */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500">Name:</span>
            <span className="text-lg font-medium text-gray-800">{user.name}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500">Email:</span>
            <span className="text-lg font-medium text-gray-800">{user.email}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500">Emergency Contact:</span>
            <span className="text-lg font-medium text-gray-800">{user.phoneNumber}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500">Alternate Contact:</span>
            <span className="text-lg font-medium text-gray-800">{booking.emergencyContactNo}</span>
          </div>
        </div>

        {/* Volunteer Experience */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-gray-600 font-semibold">Volunteer Experience</h3>
          <p className="text-gray-700 mt-2">
            {booking.volunteerExperience || "No experience provided."}
          </p>
        </div>

        {/* Why Volunteer */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-gray-600 font-semibold">Why Do You Want to Volunteer?</h3>
          <p className="text-gray-700 mt-2">
            {booking.whyDoYouWantToVolunteer || "No reason provided."}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 px-6 py-4 flex justify-center">
        <Link to="/admin/applied-list">
          <button className="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md transition">
            Back
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>








<div>
  <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-6">
    <div className="w-full max-w-3xl bg-white shadow-2xl rounded-lg overflow-hidden transform transition hover:scale-105 duration-300">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-6">
        <h2 className="text-3xl font-bold text-center">Applicant Profile</h2>
        <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-lg">
          <div  className="rounded-full w-10 h-10 object-cover">
           <img className='rounded-full' src={profileImg} alt="" />
           
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-8">
        {/* User Info */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Name</p>
            <p className="text-lg font-semibold text-gray-800">{user.name}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Email</p>
            <p className="text-lg font-semibold text-gray-800">{user.email}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Emergency Contact</p>
            <p className="text-lg font-semibold text-gray-800">{user.phoneNumber}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Alternate Contact</p>
            <p className="text-lg font-semibold text-gray-800">{booking.emergencyContactNo}</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300" />

        {/* Volunteer Experience */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600">Volunteer Experience</h3>
          <p className="text-gray-700 mt-2">
            {booking.volunteerExperience || "No experience provided."}
          </p>
        </div>

        {/* Motivation */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600">Why Do You Want to Volunteer?</h3>
          <p className="text-gray-700 mt-2">
            {booking.whyDoYouWantToVolunteer || "No reason provided."}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-6 py-4 flex justify-center">
        <Link to="/admin/applied-list">
          <button className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg hover:scale-110 transform transition">
            Back to List
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>





        </div>




    );
};

export default ApplicantDetails;