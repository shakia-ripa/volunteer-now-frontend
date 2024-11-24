import React from 'react';

const DashboardNav = ({title, handleLogout}) => {
    return (
        <div className='px-8 py-4 flex justify-between items-center'>
            <h2 className="bg-white  text-2xl font-medium">{title}</h2>
            <button onClick={handleLogout} className='bg-lime-600  hover:bg-lime-700 text-white md:text-lg font-bold py-2 px-4 rounded-lg'>Logout</button>
        </div>
    );
};

export default DashboardNav;