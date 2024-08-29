import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';

// Validation Schema
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  mobile: Yup.string()
    .required('Mobile Number is required')
    .matches(/^\d{10}$/, 'Invalid mobile number'),
  city: Yup.string().required('City is required'),
  courseName: Yup.string().required('Course Name is required'),
  mode: Yup.string().oneOf(['Online', 'Offline'], 'Invalid mode').required('Mode is required'),
  date: Yup.date().required('Date is required').nullable()
});

const CourseForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, overview } = location.state || {};

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post('https://arrc-backend.onrender.com/api/v1/courses/courseApplications', values);
      toast.success('Application submitted successfully!');
      resetForm();
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
      console.error('Error submitting application:', error);
    }
  };

  return (
    <div className="relative min-h-screen ">
      <div className="container mx-auto px-6 py-12">
        <button
          onClick={() => navigate('/courseSection')}
          className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-700 mb-8"
        >
          Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {/* Left Side: Course Details */}
          {/* Left Side: Course Details */}
          <div className="p-8 rounded-lg bg-gray-900  shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
            <p className="mb-4 text-white">{overview}</p>


            <p className="text-white mb-4">Please fill out the form to apply for this course.</p>
          </div>

          {/* Right Side: Application Form */}
          <div className=" p-8 rounded-lg bg-gray-900 shadow-lg">
            <h2 className="text-3xl font-bold text-purple-600 mb-6">Apply for {title}</h2>
            <Formik
              initialValues={{
                name: '',
                email: '',
                mobile: '',
                city: '',
                courseName: title || '',
                mode: '',
                date: ''
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form>
                  <div className="space-y-6">
                    <div className="mb-4">
                      <label className="block text-white font-medium mb-2">Name</label>
                      <Field
                        type="text"
                        name="name"
                        className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                      />
                      <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-white font-medium mb-2">Email</label>
                      <Field
                        type="email"
                        name="email"
                        className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-white font-medium mb-2">Mobile Number</label>
                      <Field
                        type="text"
                        name="mobile"
                        className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                      />
                      <ErrorMessage name="mobile" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-white font-medium mb-2">City</label>
                      <Field
                        type="text"
                        name="city"
                        className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                      />
                      <ErrorMessage name="city" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-white font-medium mb-2">Course Name</label>
                      <Field
                        type="text"
                        name="courseName"
                        disabled
                        className="form-input mt-1 bg-white block w-full px-3 py-2 border rounded-md shadow-sm"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-white font-medium mb-2">Mode (Online / Offline)</label>
                      <Field
                        as="select"
                        name="mode"
                        className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                      >
                        <option value="">Select Mode</option>
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                      </Field>
                      <ErrorMessage name="mode" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-white font-medium mb-2">Date</label>
                      <Field
                        type="date"
                        name="date"
                        className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                      />
                      <ErrorMessage name="date" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    <button
                      type="submit"
                      className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-700"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
