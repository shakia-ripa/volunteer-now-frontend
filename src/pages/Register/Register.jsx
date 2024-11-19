// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
// const Register = () => {
//     return (
//         <div className='min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center '>
//             <Helmet>
//                 <title>VolunteerNow | Register</title>
//             </Helmet>
//             <div className='border rounded-lg border-black bg-white px-28 py-8 text-center '>
//                 <h2 className="text-3xl font-bold mb-7 font-montserrat">Please Register</h2>
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
//                             <input type="password" placeholder="password" className="input input-bordered  focus:outline-none" required />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Phone</span>
//                             </label>
                            
//                             <input type='tel' placeholder="Phone" className="input input-bordered focus:outline-none " required />
//                         </div>
//                         <div className="form-control mt-5">
//                             <button className="btn btn-primary text-lg font-montserrat font-bold">Register</button>
//                         </div>
//                     </form>
                    
//                     <p>Already have an account? <Link to='/login' className='text-blue-600 underline'>Login</Link></p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;



import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F0F4F8] to-[#F8FAFC] flex items-center justify-center">
            <Helmet>
                <title>VolunteerNow | Register</title>
            </Helmet>
            <div className="border border-gray-300 rounded-xl bg-white shadow-lg px-10 py-8 text-center w-full max-w-md">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-8 font-montserrat">Create Your Account</h2>
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
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-700">Phone</span>
                        </label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary w-full py-3 text-lg font-montserrat font-bold hover:bg-blue-600">
                            Register
                        </button>
                    </div>
                </form>
                <p className="mt-6 text-gray-600 ">
                    Already have an account?
                    <Link to="/login" className="text-blue-600 underline hover:text-blue-800">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
