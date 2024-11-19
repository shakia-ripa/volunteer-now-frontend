import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>VolunteerNow | Blog</title>
            </Helmet>
            <h2 className="text-5xl">All Blogs Here....</h2>
        </div>
    );
};

export default Blog;