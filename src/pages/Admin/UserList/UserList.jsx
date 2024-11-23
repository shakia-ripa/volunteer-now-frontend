import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import api from '../../../Routes/baseApi';

const UserList = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/user',
                    {
                        headers: {
                            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzMyZjdjNWZiY2M4ZGIyNWI3OWNiNWEiLCJlbWFpbCI6ImFkbWluLmRvZUBleGFtcGxlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTczMjM0ODU0NCwiZXhwIjoxNzMyMzUyMTQ0fQ.M2-ZTHSA_85DFKUUcezgRPSGtQZOSHcQTVYn7W_uWL0', // Add token here
                        }
                    }
                );
                console.log(response);
                setUsers(response.data.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    console.log(users);

    return (
        <div className='h-full'>
            <Helmet>
                <title>VolunteerNow | Users</title>
            </Helmet>
            <h2 className="bg-white pl-8 py-4 text-2xl font-medium">Users List</h2>
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