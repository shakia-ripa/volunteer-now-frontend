import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
    // Using the useParams hook to get the blog ID from the URL
    const { id } = useParams();

    // Simulated blog post data (this would normally come from an API or backend)
    const posts = [
        {
            id: "1",
            title: "The Power of Volunteering: How One Act Can Change Lives",
            author: "Sarah Khan",
            date: "March 15, 2024",
            content: `Volunteering is one of the most rewarding activities one can participate in. It’s an opportunity to give back to the community, make meaningful connections, and impact lives. In this blog, we dive deep into how volunteering can help build stronger communities and how even small efforts can lead to big changes in society. Through volunteering, you can help individuals in need, support local charities, and contribute to causes that are close to your heart.`,
            imageUrl: "https://via.placeholder.com/1200x600",
        },
        {
            id: "2",
            title: "How to Get Involved with Local Charity Events",
            author: "Ahmed Khan",
            date: "March 10, 2024",
            content: `Charity events are an excellent way to make a direct impact in your community. Whether it’s a fundraising run, a food drive, or a charity auction, local events offer countless opportunities for you to get involved and help others. In this post, we’ll guide you on how to identify charity events in your area and how to participate or volunteer at these events to maximize your contribution to meaningful causes.`,
            imageUrl: "https://via.placeholder.com/1200x600",
        },
        {
            id: "3",
            title: "Volunteer Opportunities for Environmental Conservation",
            author: "Zainab Ali",
            date: "February 28, 2024",
            content: `With environmental issues such as climate change and pollution becoming more urgent, volunteering for environmental conservation is more important than ever. In this blog post, we explore various volunteer opportunities that allow individuals to contribute towards the protection of our planet. From organizing local clean-ups to volunteering with global conservation efforts, we’ll cover the many ways you can make a difference.`,
            imageUrl: "https://via.placeholder.com/1200x600",
        },
    ];

    // Find the specific post by ID
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return (
            <div className="min-h-screen flex justify-center items-center text-center">
                <p className="text-2xl text-gray-800">Blog post not found!</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-12">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                    <h2 className="text-3xl font-bold text-gray-800">{post.title}</h2>
                    <p className="text-sm text-gray-500 mt-2">
                        By {post.author} | {post.date}
                    </p>
                </div>

                <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-64 object-cover mt-4 rounded-t-lg"
                />

                <div className="p-6">
                    <p className="text-lg text-gray-700 mb-6">{post.content}</p>

                    <button
                        className="btn btn-outline btn-secondary px-6 py-2 font-medium mt-6"
                        onClick={() => window.history.back()}
                    >
                        Back to Blogs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
