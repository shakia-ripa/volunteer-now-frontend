import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
    return (
        <div className='flex flex-col justify-between items-center'>
            <h2 className="text-2xl">You are not authorized!</h2>
            <Link to='/'> <button className="btn m-2 btn-primary">Go to home</button></Link>
        </div>
    );
};

export default Unauthorized;