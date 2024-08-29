// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Table, Button } from 'antd';
// import { DownloadOutlined } from '@ant-design/icons';
// import { toast } from 'react-toastify';

// const InternshipAdmin = () => {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const response = await axios.get('https://arrc-backend.onrender.com/api/v1/internships/internshipApplications');
//         setApplications(response.data);
//         setLoading(false);
//       } catch (error) {
//         toast.error('Failed to fetch applications. Please try again.');
//         console.error('Error fetching applications:', error);
//         setLoading(false);
//       }
//     };

//     fetchApplications();
//   }, []);

//   const downloadCV = (cvUrl) => {
//     window.open(cvUrl, '_blank');
//   };

//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'City',
//       dataIndex: 'city',
//       key: 'city',
//     },
//     {
//       title: 'Mobile',
//       dataIndex: 'mobile',
//       key: 'mobile',
//     },
//     {
//       title: 'Email',
//       dataIndex: 'email',
//       key: 'email',
//     },
//     {
//       title: 'Tech Skills',
//       dataIndex: 'techSkills',
//       key: 'techSkills',
//     },
//     {
//       title: 'Mode',
//       dataIndex: 'mode',
//       key: 'mode',
//     },
//     {
//       title: 'Education',
//       dataIndex: 'education',
//       key: 'education',
//     },
//     {
//       title: 'CV',
//       dataIndex: 'cv',
//       key: 'cv',
//       render: (cv) => (
//         <Button
//           type="link"
//           icon={<DownloadOutlined />}
//           onClick={() => downloadCV(cv)}
//         >
//           Download CV
//         </Button>
//       ),
//     },
//   ];

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Internship Applications</h1>
//       <Table
//         dataSource={applications}
//         columns={columns}
//         rowKey="_id"
//         loading={loading}
//         pagination={{ pageSize: 10 }}
//       />
//     </div>
//   );
// };

// export default InternshipAdmin;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'antd';
import { DownloadOutlined, DeleteOutlined, FileExcelOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const InternshipAdmin = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('https://arrc-backend.onrender.com/api/v1/internships/internshipApplications');
        setApplications(response.data);
        setLoading(false);
      } catch (error) {
        toast.error('Failed to fetch applications. Please try again.');
        console.error('Error fetching applications:', error);
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const downloadCV = (cvUrl) => {
    window.open(cvUrl, '_blank');
  };

  const deleteApplication = async (id) => {
    try {
      await axios.delete(`https://arrc-backend.onrender.com/api/v1/internships/internshipApplications/${id}`);
      setApplications(applications.filter(application => application._id !== id));
      toast.success('Application deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete application.');
      console.error('Error deleting application:', error);
    }
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(applications);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Applications');
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'internship_applications.xlsx');
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Tech Skills',
      dataIndex: 'techSkills',
      key: 'techSkills',
    },
    {
      title: 'Mode',
      dataIndex: 'mode',
      key: 'mode',
    },
    {
      title: 'Education',
      dataIndex: 'education',
      key: 'education',
    },
    {
      title: 'CV',
      dataIndex: 'cv',
      key: 'cv',
      render: (cv) => (
        <Button
        className='right'
          type="link"
          icon={<DownloadOutlined />}
          onClick={() => downloadCV(cv)}
        >
          Download CV
        </Button>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button
          type="link"
          icon={<DeleteOutlined />}
          onClick={() => deleteApplication(record._id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    //    <div className="container mx-auto p-6">
    //   <div className="flex justify-between items-center mb-6">
    //     <h1 className="text-3xl font-bold">Internship Applications</h1>
    //     <Button
    //       type="primary"
    //       icon={<ExportOutlined />}
    //       onClick={exportToExcel}
    //     >
    //       Export to Excel
    //     </Button>
    //   </div>
    //   <Table
    //     dataSource={applications}
    //     columns={columns}
    //     rowKey="_id"
    //     loading={loading}
    //     pagination={{ pageSize: 10 }}
    //   />
    // </div>
    <div className="container mx-auto p-6">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Internship Applications</h1>
      <Button
        type="primary"
        icon={<FileExcelOutlined />}
        onClick={exportToExcel}
      >
        Export to Excel
      </Button>
    </div>
    <Table
      dataSource={applications}
      columns={columns}
      rowKey="_id"
      loading={loading}
      pagination={{ pageSize: 10 }}
    />
  </div>
  );
};

export default InternshipAdmin;
