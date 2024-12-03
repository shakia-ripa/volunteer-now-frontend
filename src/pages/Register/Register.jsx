import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import api from "../../Routes/baseApi";
import AuthService from "../../Utils/auth.utils";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2';

const Register = () => {
    const navigate= useNavigate()
    const { setUser } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const locations = [
        "Dhaka",
        "Chattogram",
        "Rajshahi",
        "Sylhet",
        "Khulna",
        "Barishal",
        "Rangpur",
        "Mymensingh",
    ];

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await api.post("/user/register", data);
            if (response.data.accessToken) {
                localStorage.setItem('accessToken', response.data.accessToken)
                const decodedUser = AuthService.getCurrentUser();
                setUser(decodedUser);
                navigate('/events');
            }
        } catch (error) {
            if(error){
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: error?.response?.data?.message,
                    showConfirmButton: false,
                    timer: 1500
                });
               
              
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F0F4F8] to-[#F8FAFC] flex items-center justify-center">
            <Helmet>
                <title>VolunteerNow | Register</title>
            </Helmet>
            <div className="border border-gray-300 rounded-xl bg-white shadow-lg px-10 py-8 text-center w-full max-w-2xl">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-8 font-montserrat">
                    Create Your Account
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-700">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && (
                            <span className="text-red-500 text-sm">{errors.name.message}</span>
                        )}
                    </div>

                    {/* Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-700">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">{errors.email.message}</span>
                        )}
                    </div>

                    {/* Password */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-700">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                            {...register("password", { required: "Password is required" })}
                        />
                        {errors.password && (
                            <span className="text-red-500 text-sm">{errors.password.message}</span>
                        )}
                    </div>

                    {/* Phone */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-700">Phone</span>
                        </label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                            {...register("phoneNumber", { required: "Phone number is required" })}
                        />
                        {errors.phoneNumber && (
                            <span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>
                        )}
                    </div>

                    {/* Location */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-700">Location</span>
                        </label>
                        <select
                            className="select select-bordered focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                            {...register("location", { required: "Location is required" })}
                        >
                            <option value="">Select your location</option>
                            {locations.map((loc, index) => (
                                <option key={index} value={loc}>
                                    {loc}
                                </option>
                            ))}
                        </select>
                        {errors.location && (
                            <span className="text-red-500 text-sm">{errors.location.message}</span>
                        )}
                    </div>
                     {/* Submit Button */}
                <div className="col-span-1 md:col-span-2 mt-6">
                    <button
                        type="submit"
                        className="btn btn-primary w-full py-3 text-lg font-montserrat font-bold hover:bg-blue-600"
                    >
                        Register
                    </button>
                </div>
                </form>

               

                {/* Login Link */}
                <p className="mt-6 text-gray-600 col-span-1 md:col-span-2">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 underline hover:text-blue-800">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
