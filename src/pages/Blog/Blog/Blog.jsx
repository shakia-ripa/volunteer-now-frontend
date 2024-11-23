import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Blog = () => {
    const posts = [
        {
            id: "1",
            title: "The Power of Volunteering: How One Act Can Change Lives",
            author: "Sarah Khan",
            date: "March 15, 2024",
            content: `Volunteering is one of the most rewarding activities one can participate in. It’s an opportunity to give back to the community, make meaningful connections, and impact lives. In this blog, we dive deep into how volunteering can help build stronger communities and how even small efforts can lead to big changes in society. Through volunteering, you can help individuals in need, support local charities, and contribute to causes that are close to your heart.`,
            imageUrl: "https://plus.unsplash.com/premium_photo-1683134047656-27f9d72f3f87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: "2",
            title: "How to Get Involved with Local Charity Events",
            author: "Ahmed Khan",
            date: "March 10, 2024",
            content: `Charity events are an excellent way to make a direct impact in your community. Whether it’s a fundraising run, a food drive, or a charity auction, local events offer countless opportunities for you to get involved and help others. In this post, we’ll guide you on how to identify charity events in your area and how to participate or volunteer at these events to maximize your contribution to meaningful causes.`,
            imageUrl: "https://plus.unsplash.com/premium_photo-1664300347812-00e2b09646c5?q=80&w=2116&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: "3",
            title: "Volunteer Opportunities for Environmental Conservation",
            author: "Zainab Ali",
            date: "February 28, 2024",
            content: `With environmental issues such as climate change and pollution becoming more urgent, volunteering for environmental conservation is more important than ever. In this blog post, we explore various volunteer opportunities that allow individuals to contribute towards the protection of our planet. From organizing local clean-ups to volunteering with global conservation efforts, we’ll cover the many ways you can make a difference.`,
            imageUrl: "https://images.unsplash.com/photo-1616680214084-22670de1bc82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                                        {post.content.substring(0, 50)}....
                                    </p>
                                    <Link to={`/blog/${post.id}`}>
                                        <button className="btn btn-primary text-white py-2 px-4 rounded-lg transition-colors hover:bg-blue-600">Read More</button>
                                    </Link>
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