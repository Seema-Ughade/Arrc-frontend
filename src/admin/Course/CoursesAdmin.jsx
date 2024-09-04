import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseAdmin = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <div className="container mx-auto p-6">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-6 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Course Applications</h1>
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
                <td className="py-2 px-4 border-b">
                  <button 
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(app._id)}
                  >
                    Delete
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
