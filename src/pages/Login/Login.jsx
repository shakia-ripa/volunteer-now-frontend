import React, { useContext } from 'react';
import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form"
import AuthService from '../../Utils/auth.utils';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { setUser } = useContext(AuthContext)

    const onSubmit = async (data) => {

        const response = await AuthService.login(data.email, data.password);
        const decodedUser = AuthService.getCurrentUser();
        const userRole = decodedUser.role
        setUser(decodedUser);

        if (response && userRole && from === '/') {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Login Successfull!",
                showConfirmButton: false,
                timer: 1500
            });
            navigate(userRole === 'admin' ? '/admin/event-list' : '/user/my-events', { replace: true });
        }
        else {
            // Redirect to the intended route
            navigate(from, { replace: true });
        }

    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F0F4F8] to-[#F8FAFC] flex items-center justify-center">
            <Helmet>
                <title>VolunteerNow | Login</title>
            </Helmet>
            <div className="border border-gray-300 rounded-xl bg-white shadow-lg px-10 py-8 text-center w-full max-w-md">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-8 font-montserrat">Login to Your Account</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-700">Email</span>
                        </label>
                        <input
                            {...register("email", { required: true })}
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
                            {...register("password", { required: true })}
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
                        <button type="submit" className="btn btn-primary w-full py-3 text-lg font-montserrat font-bold hover:bg-blue-600">
                            Login
                        </button>
                    </div>
                </form>
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
