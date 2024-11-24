import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import api from '../../../Routes/baseApi';
import { useNavigate } from 'react-router-dom';
import DashboardNav from '../../Shared/DashboardNav/DashboardNav';
import AuthService from '../../../Utils/auth.utils';
import { AuthContext } from '../../../Providers/AuthProvider';

const UserList = () => {

    const [users, setUsers] = useState([]);
    const {setUser}= useContext(AuthContext)
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/user');
                console.log(response);
                setUsers(response.data.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    console.log(users);

    const handleLogout = () => {
        AuthService.logOut();
        setUser(null)
        navigate('/')
    }

    return (
        <div className='h-full'>
            <Helmet>
                <title>VolunteerNow | Users</title>
            </Helmet>
            <DashboardNav title={'Users List'} handleLogout={handleLogout}></DashboardNav>
            <div className='bg-[#edeff2] rounded-tl-md lg:h-[89%] px-10 pt-3'>
                <div className='bg-white px-5 py-5 mt-7 rounded-xl'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>

                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Location</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => {
                                        return (
                                            <tr>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle h-12 w-12">
                                                                <img
                                                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                                    alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div className="font-bold">{user.name}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {user.email}
                                                </td>
                                                <td>{user.phoneNumber}</td>
                                                <td>{user.division}</td>
                                                <th>
                                                    <button className="btn btn-ghost btn-xs">details</button>
                                                </th>
                                            </tr>
                                        )
                                    })
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserList;