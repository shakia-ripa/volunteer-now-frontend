// import React from 'react';
// import googleicon from '../../assets/images/googleicon.svg';
// import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';

// const Login = () => {
//     return (
//         <div className='min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center '>
//             <Helmet>
//                 <title>VolunteerNow | Login</title>
//             </Helmet>
//             <div className='border rounded-lg border-black bg-white px-28 py-8 text-center '>
//                 <h2 className="text-3xl font-bold mb-7 font-montserrat">Please Login</h2>
//                 <div className="">
//                     <form className="">
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input type="email" placeholder="email" className="input input-bordered focus:outline-none" required />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input type="password" placeholder="password" className="input input-bordered focus:outline-none " required />
//                             <label className="label">
//                                 <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                             </label>
//                         </div>
//                         <div className="form-control mt-4">
//                             <button className="btn btn-primary text-lg font-montserrat font-bold">Login</button>
//                         </div>
//                     </form>
//                     <button className='mt-5 mb-2 border border-gray-400 rounded-full py-2 pl-2 pr-6 flex items-center justify-between font-montserrat'>
//                         <img className='w-5' src={googleicon} alt="" />
//                         <p className='flex-1 lg:w-64 text-lg font-medium'>Continue with Google</p>
//                     </button>
//                     <p>Don't have an account? <Link to='/register' className='text-blue-600 underline'>Create an account</Link></p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;


import React from 'react';
import googleicon from '../../assets/images/googleicon.svg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F0F4F8] to-[#F8FAFC] flex items-center justify-center">
            <Helmet>
                <title>VolunteerNow | Login</title>
            </Helmet>
            <div className="border border-gray-300 rounded-xl bg-white shadow-lg px-10 py-8 text-center w-full max-w-md">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-8 font-montserrat">Login to Your Account</h2>
                <form className="space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-700">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-700">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                            required
                        />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-sm text-blue-500 hover:text-blue-700">
                                Forgot password?
                            </a>
                        </label>
                    </div>
                    <div className="form-control">
                        <button className="btn btn-primary w-full py-3 text-lg font-montserrat font-bold hover:bg-blue-600">
                            Login
                        </button>
                    </div>
                </form>
                <div className="mt-6">
                    <button className="w-full border border-gray-300 rounded-full py-2 px-4 flex items-center justify-center shadow-sm hover:bg-gray-100">
                        <img className="w-5 h-5 mr-3" src={googleicon} alt="Google Icon" />
                        <span className="text-gray-700 font-medium text-lg">Continue with Google</span>
                    </button>
                </div>
                <p className="mt-6 text-gray-600">
                    Don't have an account? 
                    <Link to="/register" className="text-blue-600 underline hover:text-blue-800">
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
