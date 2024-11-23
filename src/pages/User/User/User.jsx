import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { MdEventRepeat } from "react-icons/md";
import { Helmet } from 'react-helmet-async';

const User = () => {
    return (
        <div className='grid grid-cols-5 md:grid-cols-4 h-screen'>
            <Helmet>
                <title>VolunteerNow | User</title>
            </Helmet>
            <div
                className='col-span-2 md:col-span-1 lg:pl-11 lg:py-6'>
                <Link to='/' className="lg:text-3xl font-bold font-montserrat">VolunteerNow</Link>

                <div className='space-y-4 mt-8 '>
                    <NavLink
                        to='/user/my-events'
                        className={({ isActive }) =>
                            `flex items-center gap-2 ${isActive ? "font-bold text-blue-400" : ""}`
                        }
                    >
                        <MdEventRepeat className='w-5 h-5' />
                        My Events
                    </NavLink>


                </div>
            </div>
            <div className='col-span-3 h-full'>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default User;