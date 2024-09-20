// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ReactApexChart from 'react-apexcharts';

// const AdminDashboard = () => {
//   const [contactsData, setContactsData] = useState([]);
//   const [internshipsData, setInternshipsData] = useState([]);
//   const [coursesData, setCoursesData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [contactsResponse, internshipsResponse, coursesResponse] = await Promise.all([
//           axios.get('https://arrc-backend.onrender.com/api/v1/contacts'),
//           axios.get('https://arrc-backend.onrender.com/api/v1/internships/internshipApplications'),
//           axios.get('https://arrc-backend.onrender.com/api/v1/courses/courseApplications')
//         ]);

//         setContactsData(contactsResponse.data);
//         setInternshipsData(internshipsResponse.data);
//         setCoursesData(coursesResponse.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Bar Chart
//   const barChartOptions = {
//     chart: {
//       type: 'bar',
//       height: 350,
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: '55%',
//         endingShape: 'rounded',
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       show: true,
//       width: 2,
//       colors: ['transparent'],
//     },
//     xaxis: {
//       categories: ['Contacts', 'Internships', 'Courses'],
//     },
//     yaxis: {
//       title: {
//         text: 'Number of Applications',
//       },
//     },
//     fill: {
//       opacity: 1,
//     },
//     tooltip: {
//       y: {
//         formatter: function (val) {
//           return val + ' applications';
//         },
//       },
//     },
//   };

//   const barChartSeries = [
//     {
//       name: 'Applications',
//       data: [contactsData.length, internshipsData.length, coursesData.length],
//     },
//   ];

//   // Pie Chart
//   const pieChartOptions = {
//     chart: {
//       width: 380,
//       type: 'pie',
//     },
//     labels: ['Contacts', 'Internships', 'Courses'],
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 200,
//           },
//           legend: {
//             position: 'bottom',
//           },
//         },
//       },
//     ],
//   };

//   const pieChartSeries = [
//     contactsData.length,
//     internshipsData.length,
//     coursesData.length,
//   ];


//   return (
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//       <div className="container mx-auto px-4">
//         <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Dashboard</h1>

//         {/* Three Columns for Count Summary */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//           <div className="bg-white p-6 rounded-lg shadow-md text-center">
//             <h2 className="text-2xl font-semibold text-gray-700">Contacts</h2>
//             <p className="text-4xl font-bold text-blue-500">{contactsData.length}</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md text-center">
//             <h2 className="text-2xl font-semibold text-gray-700">Internships</h2>
//             <p className="text-4xl font-bold text-green-500">{internshipsData.length}</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md text-center">
//             <h2 className="text-2xl font-semibold text-gray-700">Courses</h2>
//             <p className="text-4xl font-bold text-purple-500">{coursesData.length}</p>
//           </div>
//         </div>

//         {/* Charts Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//           {/* Bar Chart Section */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold mb-4 text-gray-700">Applications Overview</h2>
//             <ReactApexChart options={barChartOptions} series={barChartSeries} type="bar" height={350} />
//           </div>

//           {/* Pie Chart Section */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl  font-semibold mb-4 text-gray-700">Application Distribution</h2>
//             <ReactApexChart options={pieChartOptions} series={pieChartSeries} type="pie" width={380} />
//           </div>
//         </div>

//         {/* Radar Chart Section */}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';

const AdminDashboard = () => {
  const [contactsData, setContactsData] = useState(
    JSON.parse(localStorage.getItem('contactsData')) || []
  );
  const [internshipsData, setInternshipsData] = useState(
    JSON.parse(localStorage.getItem('internshipsData')) || []
  );
  const [coursesData, setCoursesData] = useState(
    JSON.parse(localStorage.getItem('coursesData')) || []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contactsResponse, internshipsResponse, coursesResponse] = await Promise.all([
          axios.get('https://arrc-backend.onrender.com/api/v1/contacts'),
          axios.get('https://arrc-backend.onrender.com/api/v1/internships/internshipApplications'),
          axios.get('https://arrc-backend.onrender.com/api/v1/courses/courseApplications')
        ]);

        const newContactsData = contactsResponse.data;
        const newInternshipsData = internshipsResponse.data;
        const newCoursesData = coursesResponse.data;

        // Save fetched data to both state and localStorage
        setContactsData(newContactsData);
        setInternshipsData(newInternshipsData);
        setCoursesData(newCoursesData);

        localStorage.setItem('contactsData', JSON.stringify(newContactsData));
        localStorage.setItem('internshipsData', JSON.stringify(newInternshipsData));
        localStorage.setItem('coursesData', JSON.stringify(newCoursesData));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Only fetch data if not available in localStorage
    if (!contactsData.length || !internshipsData.length || !coursesData.length) {
      fetchData();
    }
  }, []);

  const handleClearHistory = () => {
    localStorage.removeItem('contactsData');
    localStorage.removeItem('internshipsData');
    localStorage.removeItem('coursesData');
    setContactsData([]);
    setInternshipsData([]);
    setCoursesData([]);
  };

  // Bar Chart
  const barChartOptions = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Contacts', 'Internships', 'Courses'],
    },
    yaxis: {
      title: {
        text: 'Number of Applications',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + ' applications';
        },
      },
    },
  };

  const barChartSeries = [
    {
      name: 'Applications',
      data: [contactsData.length, internshipsData.length, coursesData.length],
    },
  ];

  // Pie Chart
  const pieChartOptions = {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Contacts', 'Internships', 'Courses'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const pieChartSeries = [
    contactsData.length,
    internshipsData.length,
    coursesData.length,
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Dashboard</h1>

        {/* Three Columns for Count Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-gray-700">Contacts</h2>
            <p className="text-4xl font-bold text-blue-500">{contactsData.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-gray-700">Internships</h2>
            <p className="text-4xl font-bold text-green-500">{internshipsData.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-gray-700">Courses</h2>
            <p className="text-4xl font-bold text-purple-500">{coursesData.length}</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Bar Chart Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Applications Overview</h2>
            <ReactApexChart options={barChartOptions} series={barChartSeries} type="bar" height={350} />
          </div>

          {/* Pie Chart Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Application Distribution</h2>
            <ReactApexChart options={pieChartOptions} series={pieChartSeries} type="pie" width={380} />
          </div>
        </div>

        {/* Manage History Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={handleClearHistory}
            className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
          >
            Clear History
          </button>
          <button
            onClick={() => alert('Data is saved in localStorage!')}
            className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
          >
            Keep History
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
