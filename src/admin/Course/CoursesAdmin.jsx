// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CourseAdmin = () => {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const response = await axios.get('https://arrc-backend.onrender.com/api/v1/courses/courseApplications'); // Updated endpoint
//         setApplications(response.data);
//       } catch (error) {
//         setError('Error fetching applications. Please try again.');
//         console.error('Error fetching applications:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchApplications();
//   }, []);

//   if (loading) {
//     return <div className="container mx-auto p-6">Loading...</div>;
//   }

//   if (error) {
//     return <div className="container mx-auto p-6 text-red-500">{error}</div>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Course Applications</h1>
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b">Name</th>
//             <th className="py-2 px-4 border-b">Email</th>
//             <th className="py-2 px-4 border-b">Mobile</th>
//             <th className="py-2 px-4 border-b">City</th>
//             <th className="py-2 px-4 border-b">Course Name</th>
//             <th className="py-2 px-4 border-b">Mode</th>
//             <th className="py-2 px-4 border-b">Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {applications.length > 0 ? (
//             applications.map((app, index) => (
//               <tr key={index}>
//                 <td className="py-2 px-4 border-b">{app.name}</td>
//                 <td className="py-2 px-4 border-b">{app.email}</td>
//                 <td className="py-2 px-4 border-b">{app.mobile}</td>
//                 <td className="py-2 px-4 border-b">{app.city}</td>
//                 <td className="py-2 px-4 border-b">{app.courseName}</td>
//                 <td className="py-2 px-4 border-b">{app.mode}</td>
//                 <td className="py-2 px-4 border-b">{new Date(app.date).toLocaleDateString()}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7" className="py-2 px-4 border-b text-center">No applications found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CourseAdmin;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const CourseAdmin = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingApplication, setEditingApplication] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    courseName: '',
    mode: '',
    date: ''
  });

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('https://arrc-backend.onrender.com/api/v1/courses/courseApplications');
        setApplications(response.data);
      } catch (error) {
        setError('Error fetching applications. Please try again.');
        console.error('Error fetching applications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://arrc-backend.onrender.com/api/v1/courses/courseApplications/${id}`);
      setApplications(applications.filter(app => app._id !== id));
    } catch (error) {
      console.error('Error deleting application:', error);
    }
  };

  const handleEdit = (app) => {
    setEditingApplication(app);
    setFormData({
      name: app.name,
      email: app.email,
      mobile: app.mobile,
      city: app.city,
      courseName: app.courseName,
      mode: app.mode,
      date: new Date(app.date).toISOString().substring(0, 10) // Set date in YYYY-MM-DD format
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://arrc-backend.onrender.com/api/v1/courses/courseApplications/${editingApplication._id}`, formData);
      setApplications(applications.map(app =>
        app._id === editingApplication._id ? { ...app, ...formData } : app
      ));
      setEditingApplication(null);
    } catch (error) {
      console.error('Error updating application:', error);
    }
  };

  if (loading) {
    return <div className="container mx-auto p-6">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-6 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Course Applications</h1>
      {editingApplication && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Edit Application</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="border border-gray-300 p-2 w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border border-gray-300 p-2 w-full"
              required
            />
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile"
              className="border border-gray-300 p-2 w-full"
              required
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="border border-gray-300 p-2 w-full"
              required
            />
            <input
              type="text"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              placeholder="Course Name"
              className="border border-gray-300 p-2 w-full"
              required
            />
            <input
              type="text"
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              placeholder="Mode"
              className="border border-gray-300 p-2 w-full"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Save Changes
            </button>
          </form>
        </div>
      )}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Mobile</th>
            <th className="py-2 px-4 border-b">City</th>
            <th className="py-2 px-4 border-b">Course Name</th>
            <th className="py-2 px-4 border-b">Mode</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.length > 0 ? (
            applications.map((app, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{app.name}</td>
                <td className="py-2 px-4 border-b">{app.email}</td>
                <td className="py-2 px-4 border-b">{app.mobile}</td>
                <td className="py-2 px-4 border-b">{app.city}</td>
                <td className="py-2 px-4 border-b">{app.courseName}</td>
                <td className="py-2 px-4 border-b">{app.mode}</td>
                <td className="py-2 px-4 border-b">{new Date(app.date).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b flex space-x-2">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center"
                    onClick={() => handleDelete(app._id)}
                  >
                    <DeleteOutlined />
                  </button>
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center"
                    onClick={() => handleEdit(app)}
                  >
                    <EditOutlined />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="py-2 px-4 border-b text-center">No applications found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CourseAdmin;
