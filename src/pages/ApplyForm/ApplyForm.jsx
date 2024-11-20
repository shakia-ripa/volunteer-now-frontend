import React from 'react';
import { Helmet } from 'react-helmet-async';

const ApplyForm = () => {
    return (
        <div class="max-w-2xl mx-auto p-8 bg-gradient-to-r from-lime-50 to-lime-100 rounded-2xl shadow-2xl">
            <Helmet>
                <title>VolunteerNow | Apply Form</title>
            </Helmet>
            <h2 class="text-4xl font-extrabold text-center text-lime-600 mb-8">Volunteer Application Form</h2>

            <form action="#" method="POST" class="space-y-8">
                <div class="space-y-2">
                    <label for="fullName" class="block text-lg font-semibold text-gray-800">Full Name</label>
                    <input type="text" id="fullName" name="fullName" class="input input-bordered w-full px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none" placeholder="Enter your full name" required />
                </div>

                <div class="space-y-2">
                    <label for="email" class="block text-lg font-semibold text-gray-800">Email Address</label>
                    <input type="email" id="email" name="email" class="input input-bordered w-full px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none " placeholder="Enter your email address" required />
                </div>

                <div class="space-y-2">
                    <label for="phone" class="block text-lg font-semibold text-gray-800">Phone Number</label>
                    <input type="tel" id="phone" name="phone" class="input input-bordered w-full px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none " placeholder="Enter your phone number" required />
                </div>

                <div class="space-y-2">
                    <label for="address" class="block text-lg font-semibold text-gray-800">Address</label>
                    <input type="text" id="address" name="address" class="input input-bordered w-full px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none" placeholder="Enter your address" required />
                </div>

                <div class="space-y-2">
                    <label for="experience" class="block text-lg font-semibold text-gray-800">Volunteer Experience</label>
                    <textarea id="experience" name="experience" rows="4" class="textarea textarea-bordered w-full px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none" placeholder="Describe your past volunteer work or relevant experience" required></textarea>
                </div>

                <div class="space-y-2">
                    <label for="motivation" class="block text-lg font-semibold text-gray-800">Why Do You Want to Volunteer?</label>
                    <textarea id="motivation" name="motivation" rows="4" class="textarea textarea-bordered w-full px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none " placeholder="Share your motivation for volunteering" required></textarea>
                </div>

                <div class="space-y-2">
                    <label for="emergencyContact" class="block text-lg font-semibold text-gray-800">Emergency Contact Information</label>
                    <input type="text" id="emergencyContact" name="emergencyContact" class="input input-bordered w-full px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none" placeholder="Enter emergency contact details" required />
                </div>

                <div class="text-center">
                    <button type="submit" class="btn w-full py-3 text-white text-lg font-semibold bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-600">
                        Apply Now
                    </button>
                </div>
            </form>
        </div>


    );
};

export default ApplyForm;