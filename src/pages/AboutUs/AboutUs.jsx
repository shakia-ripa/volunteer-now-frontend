import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
    return (
        <div className='min-h-svh'>
            <Helmet>
                <title>VolunteerNow | About Us</title>
            </Helmet>
            <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Section: Introduction */}
                    <div
                        className="text-center mb-16 py-16 h-[300px] rounded-lg bg-cover bg-center relative"
                        style={{
                            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1681505195930-388c317b7a76?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                        }}
                    >
                        <div className="rounded-lg absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay for contrast */}
                        <div className="relative z-10 px-6">
                            <h1 className="text-4xl font-extrabold text-white mb-4">About Us</h1>
                            <p className="text-lg text-white">
                                At VolunteerNow, our mission is to connect individuals with meaningful volunteer
                                opportunities that create positive change in our communities. We believe in the power of
                                volunteering to make a difference and bring people together.
                            </p>
                        </div>
                    </div>



                    {/* Section: Mission */}
                    <div className="bg-lime-100 shadow-lg rounded-lg p-8 mb-12">
                        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-lg text-gray-600">
                            Our mission is to build a better world through volunteerism by providing accessible,
                            impactful, and rewarding opportunities for individuals to contribute to causes that
                            matter most. Whether it's a community cleanup, helping the less fortunate, or supporting
                            environmental efforts, we connect you with organizations that are making a real difference.
                        </p>
                    </div>

                    {/* Section: Meet the Team */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Meet the Team</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Our team is dedicated to providing you with the best volunteer experience possible. We
                            work tirelessly to ensure that every volunteer finds the perfect opportunity to contribute
                            their time, skills, and energy.
                        </p>

                        {/* Team Members */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-lime-400">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Team Member 1"
                                    className="w-32 h-32 rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sarah Khan</h3>
                                <p className="text-sm text-gray-500">Founder & CEO</p>
                                <p className="text-gray-600 mt-4">
                                    Sarah is passionate about community development and believes in the power of
                                    volunteering to bring about social change.
                                </p>
                            </div>

                            <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-lime-400">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Team Member 2"
                                    className="w-32 h-32 rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Ahmed Khan</h3>
                                <p className="text-sm text-gray-500">Operations Manager</p>
                                <p className="text-gray-600 mt-4">
                                    Ahmed oversees the day-to-day operations of the platform and ensures that
                                    volunteers have a seamless experience.
                                </p>
                            </div>

                            <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-lime-400">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Team Member 3"
                                    className="w-32 h-32 rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Zainab Ali</h3>
                                <p className="text-sm text-gray-500">Community Outreach Coordinator</p>
                                <p className="text-gray-600 mt-4">
                                    Zainab connects with community leaders and organizations to provide volunteers
                                    with the most impactful opportunities.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section: Contact Us */}
                    <div className="bg-lime-100 rounded-lg p-8">
                        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Contact Us</h2>
                        <p className="text-lg text-gray-600 text-center mb-4">
                            Have questions or want to get involved? Reach out to us!
                        </p>
                        <div className="flex justify-center">
                            <a
                                href="mailto:info@volunteernow.com"
                                className="btn px-6 py-2 text-lg text-white rounded-lg bg-lime-500 hover:bg-lime-600"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;