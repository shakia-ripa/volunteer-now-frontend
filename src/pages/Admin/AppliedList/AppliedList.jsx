import React from 'react';
import { Helmet } from 'react-helmet-async';
const AppliedList = () => {
    return (
        <div className='h-full'>
            <Helmet>
                <title>VolunteerNow | Applied</title>
            </Helmet>
            <h2 className="bg-white pl-8 py-4 text-2xl font-medium">Applied List</h2>
            <div className='bg-[#edeff2] rounded-tl-md lg:h-[89%] px-10 pt-3'>
                <div className='bg-white px-5 py-5 mt-7 rounded-xl'></div>
            </div>
        </div>
    );
};

export default AppliedList;