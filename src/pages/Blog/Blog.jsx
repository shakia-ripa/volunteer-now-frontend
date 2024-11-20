import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    const posts = [
        {
            title: "The Importance of Volunteering",
            author: "Sarah Khan",
            date: "November 15, 2024",
            description:
                "Volunteering is not just about giving back, but also gaining experience, developing new skills, and meeting like-minded individuals...",
            link: "/blog/the-importance-of-volunteering",
        },
        {
            title: "How to Get Involved in Your Local Community",
            author: "Ahmed Khan",
            date: "October 28, 2024",
            description:
                "Looking to get involved in your local community? Here are some ideas on how to contribute and make a difference...",
            link: "/blog/how-to-get-involved",
        },
        {
            title: "Top 5 Volunteer Opportunities for 2024",
            author: "Zainab Ali",
            date: "September 10, 2024",
            description:
                "Looking for volunteer opportunities in 2024? Here are the top 5 causes you can get involved in and make a real impact...",
            link: "/blog/top-5-volunteer-opportunities",
        },
    ];
    return (
        <div>
            <Helmet>
                <title>VolunteerNow | Blog</title>
            </Helmet>
            <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
                    Our Latest Blog Posts
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div
                            key={index}
                            className="card bg-white shadow-lg rounded-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="card-body p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-3">
                                    By {post.author} | {post.date}
                                </p>
                                <p className="text-gray-700 mb-4">
                                    {post.description}
                                </p>
                                <a
                                    href={post.link}
                                    className="btn btn-primary text-white py-2 px-4 rounded-lg transition-colors hover:bg-blue-600"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Blog;