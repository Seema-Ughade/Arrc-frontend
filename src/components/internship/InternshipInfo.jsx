import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  city: Yup.string().required('City is required'),
  mobile: Yup.string()
    .required('Mobile Number is required')
    .matches(/^\d{10}$/, 'Invalid mobile number'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  techSkills: Yup.string().required('Tech Skills are required'),
  mode: Yup.string()
    .oneOf(['Online', 'Offline'], 'Invalid mode')
    .required('Mode is required'),
  education: Yup.string().required('Education is required'),
  cv: Yup.mixed()
    .required('CV is required')
    .test('fileSize', 'File size is too large', value => !value || (value && value.size <= 1 * 1024 * 1024))
});

const InternshipInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, overview, details } = location.state || {};

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const formData = new FormData();
      formData.append('cv', values.cv);
      formData.append('name', values.name.toUpperCase());
      formData.append('city', values.city.toUpperCase());
      formData.append('mobile', values.mobile);
      formData.append('email', values.email.toUpperCase());
      formData.append('techSkills', values.techSkills.toUpperCase());
      formData.append('mode', values.mode.toUpperCase());
      formData.append('education', values.education.toUpperCase());

      await axios.post('https://arrc-backend.onrender.com/v1/internships/internshipApplications', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      toast.success('Application submitted successfully!');
      resetForm();
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
      console.error('Error submitting application:', error);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <button
          onClick={() => navigate('/internshipCourse')}
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-700 mb-8"
        >
          Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Internship Details */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-600 mb-4">{overview}</p>
            <ul className="list-disc pl-5 space-y-2">
              {details?.map((detail, index) => (
                <li key={index} className="text-gray-600">{detail}</li>
              ))}
            </ul>
          </div>

          {/* Right Side: Application Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Apply for {title}</h2>
            <Formik
              initialValues={{ name: '', city: '', mobile: '', email: '', techSkills: '', mode: '', education: '', cv: null }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue }) => (
                <Form>
                  <div className="space-y-6">
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Name</label>
                      <Field
                        type="text"
                        name="name"
                        className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                      />
                      <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">City</label>
                      <Field
                        type="text"
                        name="city"
                        className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                      />
                      <ErrorMessage name="city" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Mobile Number</label>
                      <Field
                        type="text"
                        name="mobile"
                        className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                      />
                      <ErrorMessage name="mobile" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Email</label>
                      <Field
                        type="email"
                        name="email"
                        className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Tech Skills</label>
                      <Field
                        type="text"
                        name="techSkills"
                        className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                      />
                      <ErrorMessage name="techSkills" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Mode (Online / Offline)</label>
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
                      <label className="block text-gray-700 font-medium mb-2">Education</label>
                      <Field
                        type="text"
                        name="education"
                        className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                      />
                      <ErrorMessage name="education" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">CV Upload (Max 1MB)</label>
                      <input
                        type="file"
                        name="cv"
                        onChange={(event) => setFieldValue('cv', event.target.files[0])}
                        className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
                        accept=".pdf,.doc,.docx"
                      />
                      <ErrorMessage name="cv" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    
                    <button
                      type="submit"
                      className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-700"
                    >
                      Apply Now
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

export default InternshipInfo;
