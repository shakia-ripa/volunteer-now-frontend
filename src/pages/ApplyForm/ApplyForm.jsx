import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form"
import { useParams } from 'react-router-dom';
import api from '../../Routes/baseApi';

const ApplyForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const { eventId } = useParams();
    console.log(eventId);


    const onSubmit = async (data) => {
        console.log(data)
       const response = await api.post('/booking', {...data, eventId})
    }

    return (
        <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-lime-50 to-lime-100 rounded-2xl shadow-2xl">
            <Helmet>
                <title>VolunteerNow | Apply Form</title>
            </Helmet>
            <h2 className="text-4xl font-extrabold text-center text-lime-600 mb-8">Volunteer Application Form</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-lg font-semibold text-gray-800">Full Name</label>
                    <input {...register("fullName", { required: true })} type="text" id="fullName" name="fullName" className="input input-bordered w-full px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none" placeholder="Enter your full name" required />
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="block text-lg font-semibold text-gray-800">Email Address</label>
                    <input {...register("email", { required: true })} type="email" id="email" name="email" className="input input-bordered w-full px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none " placeholder="Enter your email address" required />
                </div>

                <div className="space-y-2">
                    <label htmlFor="phone" className="block text-lg font-semibold text-gray-800">Phone Number</label>
                    <input {...register("phone", { required: true })} type="tel" id="phone" name="phone" className="input input-bordered w-full px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none " placeholder="Enter your phone number" required />
                </div>

                <div className="space-y-2">
                    <label htmlFor="location" className="block text-lg font-semibold text-gray-800">Location</label>
                    <input {...register("location", { required: true })} type="text" id="address" name="location" className="input input-bordered w-full px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none" placeholder="Enter your location" required />
                </div>

                <div className="space-y-2">
                    <label htmlFor="volunteerExperience" className="block text-lg font-semibold text-gray-800">Volunteer Experience (If any)</label>
                    <textarea {...register("volunteerExperience")} id="volunteerExperience" name="volunteerExperience" rows="4" className="textarea textarea-bordered w-full px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none" placeholder="Describe your past volunteer work or relevant experience" required></textarea>
                </div>

                <div className="space-y-2">
                    <label htmlFor="whyDoYouWantToVolunteer" className="block text-lg font-semibold text-gray-800">Why Do You Want to Volunteer?</label>
                    <textarea {...register("whyDoYouWantToVolunteer", { required: true })} id="whyDoYouWantToVolunteer" name="whyDoYouWantToVolunteer" rows="4" className="textarea textarea-bordered w-full px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none " placeholder="Share your motivation htmlFor volunteering" required></textarea>
                </div>

                <div className="space-y-2">
                    <label htmlFor="emergencyContactNo" className="block text-lg font-semibold text-gray-800">Emergency Contact Information</label>
                    <input {...register("emergencyContactNo", { required: true })} type="text" id="emergencyContactNo" name="emergencyContactNo" className="input input-bordered w-full px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none" placeholder="Enter emergency contact details" required />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn w-full py-3 text-white text-lg font-semibold bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-600">
                        Apply Now
                    </button>
                </div>
            </form>
        </div>


    );
};

export default ApplyForm;