import React from 'react';
import { IoPeople } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Event = ({ event }) => {
    const {_id, imageURL, eventTitle, description, numOfVolunteers } = event;
    return (
        <div className="card bg-base-100 w-auto shadow-xl">
            <figure>
                <img className=' w-full h-[350px]'
                    src={imageURL}
                    alt="events" />
            </figure>
            <div className="card-body">
                <div className='flex justify-between items-center gap-10 '>
                    <h2 className="text-xl font-bold pr-6 border-r-2 border-black">{eventTitle}</h2>
                    <p className='flex items-center gap-2'>
                        <IoPeople className='w-5 h-5' />
                        <span className='text-lg font-medium'>{numOfVolunteers}</span>
                    </p>
                </div>

                <div className="card-actions mt-6">
                    <Link to={`/event/${_id}`}>
                        <button className="btn-ghost border-0 border-b-2 border-lime-600 text-lime-600 md:text-lg font-bold py-2 px-4 rounded-lg">Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Event;

//*











//https://images.unsplash.com/photo-1632932693914-89b90ae3d16d?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
