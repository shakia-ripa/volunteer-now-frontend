import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import icon from '../../../../public/vest.png';
import { AuthContext } from '../../../Providers/AuthProvider';
import AuthService from '../../../Utils/auth.utils';

const Navbar = () => {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    // Get the current user and role
    const decodedUser = AuthService.getCurrentUser();
    const userRole = decodedUser?.role || ''; // Default to an empty string if undefined
    console.log('User Role:', userRole);

    const handleLogout = () => {
        AuthService.logOut();
        setUser(null);
        navigate('/');
    };

    const links = (
        <>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'border-2 border-lime-600 text-lime-600 font-bold' : ''
                    }
                    to="/"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'border-2 border-lime-600 text-lime-600 font-bold' : ''
                    }
                    to="/about"
                >
                    About Us
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'border-2 border-lime-600 text-lime-600 font-bold' : ''
                    }
                    to="/events"
                >
                    Events
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'border-2 border-lime-600 text-lime-600 font-bold' : ''
                    }
                    to="/blog"
                >
                    Blog
                </NavLink>
            </li>
            {/* Dashboard Tab */}
            {user && (
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'border-2 border-lime-600 text-lime-600 font-bold' : ''
                        }
                        to={userRole === 'admin' ? '/admin/event-list' : '/user/my-events'}
                    >
                        Dashboard
                    </NavLink>
                </li>
            )}
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="h-8 w-8" src={icon} alt="" />
                        <Link
                            to="/"
                            className="font-bold md:text-2xl text-xl font-montserrat"
                        >
                            VolunteerNow
                        </Link>
                    </div>
                </div>
                <div className="navbar-end lg:space-x-8">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">{links}</ul>
                    </div>
                    <div className="space-x-2">
                        {!user ? (
                            <Link to="/login">
                                <button className="bg-lime-600 hover:bg-gray-100 hover:border-2 hover:border-lime-600 hover:text-lime-600 text-white md:text-lg font-bold py-2 px-4 rounded-lg">
                                    Login
                                </button>
                            </Link>
                        ) : (
                            <button
                                onClick={handleLogout}
                                className="bg-lime-600 hover:bg-gray-100 hover:border-2 hover:border-lime-600 hover:text-lime-600 text-white md:text-lg font-bold py-2 px-4 rounded-lg"
                            >
                                Logout
                            </button>
                        )}
                        {!user && (
                            <Link to="/register">
                                <button className="bg-lime-600 hover:bg-gray-100 hover:border-2 hover:border-lime-600 hover:text-lime-600 text-white md:text-lg font-bold py-2 px-4 rounded-lg">
                                    Register
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
