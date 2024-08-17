// import React, { useState } from 'react';
// import loading from '../assets/loading.gif'; // Update the path as necessary
// import logo1 from '../assets/logo1.jpeg'; // Update the path as necessary
// import { useForm, ValidationError } from '@formspree/react';

// const Contact = () => {
//     const [formValues, setFormValues] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         message: ''
//     });

//     const [formErrors, setFormErrors] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         message: ''
//     });

//     const [state, handleSubmit] = useForm("movawaqe");

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormValues(prevValues => ({
//             ...prevValues,
//             [name]: value
//         }));
//     };

//     const handleSubmitLocal = (event) => {
//         event.preventDefault();

//         const errors = {};
//         if (!formValues.name) errors.name = 'Please enter your name.';
//         if (!formValues.email) errors.email = 'Please enter your email address.';
//         if (!formValues.phone) errors.phone = 'Please enter your phone number.';
//         if (!formValues.message) errors.message = 'Please enter your message here.';

//         if (Object.keys(errors).length > 0) {
//             setFormErrors(errors);
//             return;
//         }

//         setFormErrors({});
//         console.log('Form submitted', formValues);
//         // Here, you can use Formspree's handleSubmit for form submission
//         handleSubmit(event); // Use handleSubmit from Formspree
//     };

//     if (state.succeeded) {
//         return <p>Thanks for joining!</p>;
//     }

//     return (
//         <div>
//             {/* Google Maps iframe */}
//             <section className="map-section mx-3  sm:mx-8 lg:mx-8 mt-5 mb-6">

//                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4184171923325!2d73.817028!3d18.509984699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb054367e1f%3A0xc5984eb97914d4b2!2sIdeal%20Square%2C%20Nav-Swaraj%20co-op%20HSG%20SOC!5e0!3m2!1sen!2sin!4v1722940172501!5m2!1sen!2sin"
//                     width="100%" 
//                     height="450" 
//                     frameBorder="0" 
//                     style={{ border: 0 }} 
//                     allowFullScreen 
//                     aria-hidden="false" 
//                     tabIndex="0"
//                     title="Google Maps Location"
//                  >
//                 </iframe>
//             </section>


//             {/* Contact Form Section */}
//             <section className="contact-form-section py-6 sm:py-12">
//                 <div className="container mx-auto px-5 sm:px-6 lg:px-8">
//                     <div className="flex flex-wrap mb-12">
//                         {/* Image Column */}
//                         <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
//                             <div 
//                                 className="relative w-[95%] h-64 sm:h-80 md:h-[70vh] lg:h-[65vh] bg-center bg-cover" 
//                                 style={{ backgroundImage: `url(${logo1})` }} 
//                             >
//                                 {/* Image styling applied via inline style */}
//                             </div>
//                         </div>

//                         {/* Form Column */}
//                         <div className="lg:w-1/2 w-full">
//                             <div className="default-form contact-form">
//                                 <div className="title mb-6">
//                                     <h4 className="text-xl sm:text-2xl font-semibold text-purple-600 ">Let's Talk About Your Business</h4>
//                                 </div>
//                                 <form method="post" onSubmit={handleSubmitLocal} noValidate>
//                                     <div className="space-y-4">
//                                         <div className="form-group">
//                                             <input 
//                                                 type="text" 
//                                                 className={`form-control w-full p-2 border rounded-md ${formErrors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`} 
//                                                 name="name" 
//                                                 placeholder="Your Name*" 
//                                                 value={formValues.name}
//                                                 onChange={handleChange}
//                                             />
//                                             {formErrors.name && <div className="validation-error text-white mt-1">{formErrors.name}</div>}
//                                         </div>

//                                         <div className="form-group">
//                                             <input 
//                                                 type="email" 
//                                                 className={`form-control w-full p-2 border rounded-md ${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`} 
//                                                 name="email" 
//                                                 placeholder="Mail Address*" 
//                                                 value={formValues.email}
//                                                 onChange={handleChange}
//                                             />
//                                             {formErrors.email && <div className="validation-error text-white mt-1">{formErrors.email}</div>}
//                                         </div>

//                                         <div className="form-group">
//                                             <input 
//                                                 type="text" 
//                                                 className={`form-control w-full p-2 border rounded-md ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`} 
//                                                 name="phone" 
//                                                 placeholder="Your Phone Number*" 
//                                                 value={formValues.phone}
//                                                 onChange={handleChange}
//                                             />
//                                             {formErrors.phone && <div className="validation-error text-white mt-1">{formErrors.phone}</div>}
//                                         </div>

//                                         <div className="form-group">
//                                             <textarea 
//                                                 className={`form-control w-full p-2 border rounded-md ${formErrors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`} 
//                                                 rows="6" 
//                                                 name="message" 
//                                                 placeholder="Your Message*" 
//                                                 value={formValues.message}
//                                                 onChange={handleChange}
//                                             ></textarea>
//                                             {formErrors.message && <div className="validation-error text-white mt-1">{formErrors.message}</div>}
//                                         </div>

//                                         <button 
//                                             type="submit" 
//                                             className="theme-btn btn-style-four bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
//                                             disabled={state.submitting}
//                                         >
//                                             {state.submitting ? 'Submitting...' : 'Submit'}
//                                         </button>
//                                         <img src={loading} className={`mt-4 ${state.submitting ? 'block' : 'hidden'}`} id="loader" alt="Loading" />
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="flex flex-wrap justify-between mt-12">
//                         <div className="contact-info-block lg:w-1/3 w-full mb-6 lg:mb-0">
//                             <div className="inner-box p-4">
//                                 <span className="name text-lg text-purple-600 font-semibold">Call Us</span>
//                                 <span className="info block mt-2 text-white">
//                                     <a href="tel:+917502211337">+91-7502211337 / +91-9107223377</a>
//                                 </span>
//                             </div>
//                         </div>

//                         <div className="contact-info-block lg:w-1/3 w-full mb-6 lg:mb-0">
//                             <div className="inner-box p-4">
//                                 <span className="name text-lg text-purple-600 font-semibold">Message</span>
//                                 <span className="info block mt-2 text-white">
//                                     <a href="mailto:info@bizzfly.com">arrctechnology15@gmail.com
//                                     </a>
//                                 </span>
//                             </div>
//                         </div>

//                         <div className="contact-info-block lg:w-1/3 w-full">
//                             <div className="inner-box p-4">
//                                 <span className="name text-lg text-purple-600 font-semibold">Our Location</span>
//                                 <span className="info block mt-2 text-white">
//                                     <a href="https://maps.google.com/?q=C3/12 Dhankwadi, Upper Sambhaji Nagar, Pune 411043">
//                                      Unit No.401, 5thFloor, Ideal Square,
//                                      Ideal Colony, Sr.no. 129, Kothrud, Pune-38
//                                     </a>
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Contact;




// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import loading from '../assets/loading.gif';
// import logo1 from '../assets/logo1.jpeg';

// const Contact = () => {
//     const initialValues = {
//         name: '',
//         email: '',
//         phone: '',
//         message: ''
//     };

//     const validationSchema = Yup.object({
//         name: Yup.string().required('Please enter your name.'),
//         email: Yup.string().email('Invalid email address').required('Please enter your email address.'),
//         phone: Yup.string().required('Please enter your phone number.'),
//         message: Yup.string().required('Please enter your message.')
//     });

//     const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
//         setSubmitting(true);

//         try {
//             const response = await axios.post('https://arrc-backend.onrender.com/contact', values);
//             if (response.status === 200) {
//                 setStatus({ success: true });
//                 resetForm();
//             }
//         } catch (error) {
//             console.error('There was an error submitting the form', error);
//             setStatus({ success: false });
//         } finally {
//             setSubmitting(false);
//         }
//     };

//     return (
//         <div>
//             <section className="map-section mx-3 sm:mx-8 lg:mx-8 mt-5 mb-6">
//                 <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4184171923325!2d73.817028!3d18.509984699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb054367e1f%3A0xc5984eb97914d4b2!2sIdeal%20Square%2C%20Nav-Swaraj%20co-op%20HSG%20SOC!5e0!3m2!1sen!2sin!4v1722940172501!5m2!1sen!2sin"
//                     width="100%"
//                     height="450"
//                     frameBorder="0"
//                     style={{ border: 0 }}
//                     allowFullScreen
//                     aria-hidden="false"
//                     tabIndex="0"
//                     title="Google Maps Location"
//                 ></iframe>
//             </section>

//             <section className="contact-form-section py-6 sm:py-12">
//                 <div className="container mx-auto px-5 sm:px-6 lg:px-8">
//                     <div className="flex flex-wrap mb-12">
//                         <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
//                             <div 
//                                 className="relative w-[95%] h-64 sm:h-80 md:h-[70vh] lg:h-[65vh] bg-center bg-cover" 
//                                 style={{ backgroundImage: `url(${logo1})` }} 
//                             />
//                         </div>

//                         <div className="lg:w-1/2 w-full">
//                             <div className="default-form contact-form">
//                                 <div className="title mb-6">
//                                     <h4 className="text-xl sm:text-2xl font-semibold text-purple-600">Let's Talk About Your Business</h4>
//                                 </div>

//                                 <Formik
//                                     initialValues={initialValues}
//                                     validationSchema={validationSchema}
//                                     onSubmit={handleSubmit}
//                                 >
//                                     {({ isSubmitting, status }) => (
//                                         <Form className="space-y-4">
//                                             <div className="form-group">
//                                                 <Field
//                                                     type="text"
//                                                     name="name"
//                                                     placeholder="Your Name*"
//                                                     className="form-control w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                                 />
//                                                 <ErrorMessage name="name" component="div" className="validation-error text-white mt-1" />
//                                             </div>

//                                             <div className="form-group">
//                                                 <Field
//                                                     type="email"
//                                                     name="email"
//                                                     placeholder="Mail Address*"
//                                                     className="form-control w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                                 />
//                                                 <ErrorMessage name="email" component="div" className="validation-error text-white mt-1" />
//                                             </div>

//                                             <div className="form-group">
//                                                 <Field
//                                                     type="text"
//                                                     name="phone"
//                                                     placeholder="Your Phone Number*"
//                                                     className="form-control w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                                 />
//                                                 <ErrorMessage name="phone" component="div" className="validation-error text-white mt-1" />
//                                             </div>

//                                             <div className="form-group">
//                                                 <Field
//                                                     as="textarea"
//                                                     name="message"
//                                                     placeholder="Your Message*"
//                                                     rows="6"
//                                                     className="form-control w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                                 />
//                                                 <ErrorMessage name="message" component="div" className="validation-error text-white mt-1" />
//                                             </div>

//                                             <button
//                                                 type="submit"
//                                                 className="theme-btn btn-style-four bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
//                                                 disabled={isSubmitting}
//                                             >
//                                                 {isSubmitting ? 'Submitting...' : 'Submit'}
//                                             </button>
//                                             {isSubmitting && <img src={loading} className="mt-4" alt="Loading" />}
//                                             {status && status.success && (
//                                                 <div className="text-green-500 mt-4">
//                                                     Thanks for contacting us! We'll get back to you soon.
//                                                 </div>
//                                             )}
//                                             {status && !status.success && (
//                                                 <div className="text-red-500 mt-4">
//                                                     There was an error submitting the form. Please try again.
//                                                 </div>
//                                             )}
//                                         </Form>
//                                     )}
//                                 </Formik>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="flex flex-wrap justify-between mt-12">
//                         <div className="contact-info-block lg:w-1/3 w-full mb-6 lg:mb-0">
//                             <div className="inner-box p-4">
//                                 <span className="name text-lg text-purple-600 font-semibold">Call Us</span>
//                                 <span className="info block mt-2 text-white">
//                                     <a href="tel:+917502211337">+91-7502211337 / +91-9107223377</a>
//                                 </span>
//                             </div>
//                         </div>

//                         <div className="contact-info-block lg:w-1/3 w-full mb-6 lg:mb-0">
//                             <div className="inner-box p-4">
//                                 <span className="name text-lg text-purple-600 font-semibold">Message</span>
//                                 <span className="info block mt-2 text-white">
//                                     <a href="mailto:info@bizzfly.com">arrctechnology15@gmail.com</a>
//                                 </span>
//                             </div>
//                         </div>

//                         <div className="contact-info-block lg:w-1/3 w-full">
//                             <div className="inner-box p-4">
//                                 <span className="name text-lg text-purple-600 font-semibold">Our Location</span>
//                                 <span className="info block mt-2 text-white">
//                                     <a href="https://maps.google.com/?q=C3/12 Dhankwadi, Upper Sambhaji Nagar, Pune 411043">
//                                         Unit No.401, 5thFloor, Ideal Square, Ideal Colony, Sr.no. 129, Kothrud, Pune-38
//                                     </a>
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loading from '../assets/loading.gif';
import logo1 from '../assets/logo1.jpeg';

const Contact = () => {
    const initialValues = {
        name: '',
        email: '',
        phone: '',
        message: ''
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Please enter your name.'),
        email: Yup.string().email('Invalid email address').required('Please enter your email address.'),
        phone: Yup.string().required('Please enter your phone number.'),
        message: Yup.string().required('Please enter your message.')
    });

    const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
        setSubmitting(true);

        try {
            const response = await axios.post('https://arrc-backend.onrender.com/api/v1/contacts', values);
            if (response.status === 200) {
                setStatus({ success: true });
                resetForm();
                toast.success('Thanks for contacting us! We\'ll get back to you soon.');
            }
        } catch (error) {
            console.error('There was an error submitting the form', error);
            setStatus({ success: false });
            toast.error('There was an error submitting the form. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div>
            <ToastContainer />

            <section className="map-section mx-3 sm:mx-8 lg:mx-8 mt-5 mb-6">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4184171923325!2d73.817028!3d18.509984699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb054367e1f%3A0xc5984eb97914d4b2!2sIdeal%20Square%2C%20Nav-Swaraj%20co-op%20HSG%20SOC!5e0!3m2!1sen!2sin!4v1722940172501!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex="0"
                    title="Google Maps Location"
                ></iframe>
            </section>

            <section className="contact-form-section py-6 sm:py-12">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap mb-12">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <div 
                                className="relative w-[95%] h-64 sm:h-80 md:h-[70vh] lg:h-[65vh] bg-center bg-cover" 
                                style={{ backgroundImage: `url(${logo1})` }} 
                            />
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <div className="default-form contact-form">
                                <div className="title mb-6">
                                    <h4 className="text-xl sm:text-2xl font-semibold text-purple-600">Let's Talk About Your Business</h4>
                                </div>

                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ isSubmitting, status }) => (
                                        <Form className="space-y-4">
                                            <div className="form-group">
                                                <Field
                                                    type="text"
                                                    name="name"
                                                    placeholder="Your Name*"
                                                    className="form-control w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                                <ErrorMessage name="name" component="div" className="validation-error text-red-500 mt-1" />
                                            </div>

                                            <div className="form-group">
                                                <Field
                                                    type="email"
                                                    name="email"
                                                    placeholder="Mail Address*"
                                                    className="form-control w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                                <ErrorMessage name="email" component="div" className="validation-error text-red-500 mt-1" />
                                            </div>

                                            <div className="form-group">
                                                <Field
                                                    type="text"
                                                    name="phone"
                                                    placeholder="Your Phone Number*"
                                                    className="form-control w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                                <ErrorMessage name="phone" component="div" className="validation-error text-red-500 mt-1" />
                                            </div>

                                            <div className="form-group">
                                                <Field
                                                    as="textarea"
                                                    name="message"
                                                    placeholder="Your Message*"
                                                    rows="6"
                                                    className="form-control w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                                <ErrorMessage name="message" component="div" className="validation-error text-red-500 mt-1" />
                                            </div>

                                            <button
                                                type="submit"
                                                className="theme-btn btn-style-four bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? 'Submitting...' : 'Submit'}
                                            </button>
                                            {isSubmitting && <img src={loading} className="mt-4" alt="Loading" />}
                                            {status && status.success && (
                                                <div className="text-green-500 mt-4">
                                                    Thanks for contacting us! We'll get back to you soon.
                                                </div>
                                            )}
                                            {status && !status.success && (
                                                <div className="text-red-500 mt-4">
                                                    There was an error submitting the form. Please try again.
                                                </div>
                                            )}
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between mt-12">
                        <div className="contact-info-block lg:w-1/3 w-full mb-6 lg:mb-0">
                            <div className="inner-box p-4">
                                <span className="name text-lg text-purple-600 font-semibold">Call Us</span>
                                <span className="info block mt-2 text-white">
                                    <a href="tel:+917502211337">+91-7502211337 / +91-9107223377</a>
                                </span>
                            </div>
                        </div>

                        <div className="contact-info-block lg:w-1/3 w-full mb-6 lg:mb-0">
                            <div className="inner-box p-4">
                                <span className="name text-lg text-purple-600 font-semibold">Message</span>
                                <span className="info block mt-2 text-white">
                                    <a href="mailto:info@bizzfly.com">arrctechnology15@gmail.com</a>
                                </span>
                            </div>
                        </div>

                        <div className="contact-info-block lg:w-1/3 w-full">
                            <div className="inner-box p-4">
                                <span className="name text-lg text-purple-600 font-semibold">Our Location</span>
                                <span className="info block mt-2 text-white">
                                    <a href="https://maps.google.com/?q=C3/12 Dhankwadi, Upper Sambhaji Nagar, Pune 411043">
                                        Unit No.401, 5thFloor, Ideal Square, Ideal Colony, Sr.no. 129, Kothrud, Pune-38
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
