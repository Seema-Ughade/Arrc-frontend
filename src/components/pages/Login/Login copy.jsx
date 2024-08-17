import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required')
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post('http://127.0.0.1:5000/api/v1/login', values);
                localStorage.setItem('token', response.data.token);
                toast.success('Login successful');
                setIsAuthenticated(true); // Set authentication state to true
                navigate('/dashboard');
            } catch (error) {
                toast.error(error.response?.data?.error || 'Something went wrong');
                console.error('Login error:', error);
            }
        }
    });

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg flex">
                {/* Login Form */}
                <form onSubmit={formik.handleSubmit} className="w-full p-8 space-y-6">
                    <h1 className="text-3xl font-bold text-gray-900">Login</h1>
                    <div className="flex space-x-4 mb-6">
                        <a href="#" className="text-gray-600 hover:text-blue-600">
                            <i className="fa fa-facebook-square text-2xl"></i>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-400">
                            <i className="fa fa-twitter text-2xl"></i>
                        </a>
                    </div>
                    <p className="text-gray-600 mb-4">or use your account</p>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-500"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-600 text-sm mt-1">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-600 text-sm mt-1">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <p className="text-sm text-blue-600 cursor-pointer hover:underline">Forgot your Password?</p>
                    <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        LOG IN
                    </button>
                </form>
                {/* Info Section */}
                <div className="w-1/2 bg-blue-600 text-white rounded-r-lg flex flex-col items-center justify-center p-8">
                    <h4 className="text-xl font-semibold mb-4">Welcome Back</h4>
                    <p className="text-sm text-center">Please login to access your dashboard. If you don't have an account, you can sign up here.</p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
