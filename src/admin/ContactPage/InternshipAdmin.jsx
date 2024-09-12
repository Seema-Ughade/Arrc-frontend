// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { Table, Button } from 'antd';
// // import { DownloadOutlined } from '@ant-design/icons';
// // import { toast } from 'react-toastify';

// // const InternshipAdmin = () => {
// //   const [applications, setApplications] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchApplications = async () => {
// //       try {
// //         const response = await axios.get('https://arrc-backend.onrender.com/api/v1/internships/internshipApplications');
// //         setApplications(response.data);
// //         setLoading(false);
// //       } catch (error) {
// //         toast.error('Failed to fetch applications. Please try again.');
// //         console.error('Error fetching applications:', error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchApplications();
// //   }, []);

// //   const downloadCV = (cvUrl) => {
// //     window.open(cvUrl, '_blank');
// //   };

// //   const columns = [
// //     {
// //       title: 'Name',
// //       dataIndex: 'name',
// //       key: 'name',
// //     },
// //     {
// //       title: 'City',
// //       dataIndex: 'city',
// //       key: 'city',
// //     },
// //     {
// //       title: 'Mobile',
// //       dataIndex: 'mobile',
// //       key: 'mobile',
// //     },
// //     {
// //       title: 'Email',
// //       dataIndex: 'email',
// //       key: 'email',
// //     },
// //     {
// //       title: 'Tech Skills',
// //       dataIndex: 'techSkills',
// //       key: 'techSkills',
// //     },
// //     {
// //       title: 'Mode',
// //       dataIndex: 'mode',
// //       key: 'mode',
// //     },
// //     {
// //       title: 'Education',
// //       dataIndex: 'education',
// //       key: 'education',
// //     },
// //     {
// //       title: 'CV',
// //       dataIndex: 'cv',
// //       key: 'cv',
// //       render: (cv) => (
// //         <Button
// //           type="link"
// //           icon={<DownloadOutlined />}
// //           onClick={() => downloadCV(cv)}
// //         >
// //           Download CV
// //         </Button>
// //       ),
// //     },
// //   ];

// //   return (
// //     <div className="container mx-auto p-6">
// //       <h1 className="text-3xl font-bold mb-6">Internship Applications</h1>
// //       <Table
// //         dataSource={applications}
// //         columns={columns}
// //         rowKey="_id"
// //         loading={loading}
// //         pagination={{ pageSize: 10 }}
// //       />
// //     </div>
// //   );
// // };

// // export default InternshipAdmin;



// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { Table, Button } from 'antd';
// // import { DownloadOutlined, DeleteOutlined, FileExcelOutlined } from '@ant-design/icons';
// // import { toast } from 'react-toastify';
// // import * as XLSX from 'xlsx';
// // import { saveAs } from 'file-saver';

// // const InternshipAdmin = () => {
// //   const [applications, setApplications] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchApplications = async () => {
// //       try {
// //         const response = await axios.get('https://arrc-backend.onrender.com/api/v1/internships/internshipApplications');
// //         setApplications(response.data);
// //         setLoading(false);
// //       } catch (error) {
// //         toast.error('Failed to fetch applications. Please try again.');
// //         console.error('Error fetching applications:', error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchApplications();
// //   }, []);

// //   const downloadCV = (cvUrl) => {
// //     window.open(cvUrl, '_blank');
// //   };

// //   const deleteApplication = async (id) => {
// //     try {
// //       await axios.delete(`https://arrc-backend.onrender.com/api/v1/internships/internshipApplications/${id}`);
// //       setApplications(applications.filter(application => application._id !== id));
// //       toast.success('Application deleted successfully!');
// //     } catch (error) {
// //       toast.error('Failed to delete application.');
// //       console.error('Error deleting application:', error);
// //     }
// //   };

// //   const exportToExcel = () => {
// //     const ws = XLSX.utils.json_to_sheet(applications);
// //     const wb = XLSX.utils.book_new();
// //     XLSX.utils.book_append_sheet(wb, ws, 'Applications');
// //     const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
// //     saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'internship_applications.xlsx');
// //   };

// //   const columns = [
// //     {
// //       title: 'Name',
// //       dataIndex: 'name',
// //       key: 'name',
// //     },
// //     {
// //       title: 'City',
// //       dataIndex: 'city',
// //       key: 'city',
// //     },
// //     {
// //       title: 'Mobile',
// //       dataIndex: 'mobile',
// //       key: 'mobile',
// //     },
// //     {
// //       title: 'Email',
// //       dataIndex: 'email',
// //       key: 'email',
// //     },
// //     {
// //       title: 'Tech Skills',
// //       dataIndex: 'techSkills',
// //       key: 'techSkills',
// //     },
// //     {
// //       title: 'Mode',
// //       dataIndex: 'mode',
// //       key: 'mode',
// //     },
// //     {
// //       title: 'Education',
// //       dataIndex: 'education',
// //       key: 'education',
// //     },
// //     {
// //       title: 'CV',
// //       dataIndex: 'cv',
// //       key: 'cv',
// //       render: (cv) => (
// //         <Button
// //         className='right'
// //           type="link"
// //           icon={<DownloadOutlined />}
// //           onClick={() => downloadCV(cv)}
// //         >
// //           Download CV
// //         </Button>
// //       ),
// //     },
// //     {
// //       title: 'Action',
// //       key: 'action',
// //       render: (_, record) => (
// //         <Button
// //           type="link"
// //           icon={<DeleteOutlined />}
// //           onClick={() => deleteApplication(record._id)}
// //         >
// //           Delete
// //         </Button>
// //       ),
// //     },
// //   ];

// //   return (
// //     //    <div className="container mx-auto p-6">
// //     //   <div className="flex justify-between items-center mb-6">
// //     //     <h1 className="text-3xl font-bold">Internship Applications</h1>
// //     //     <Button
// //     //       type="primary"
// //     //       icon={<ExportOutlined />}
// //     //       onClick={exportToExcel}
// //     //     >
// //     //       Export to Excel
// //     //     </Button>
// //     //   </div>
// //     //   <Table
// //     //     dataSource={applications}
// //     //     columns={columns}
// //     //     rowKey="_id"
// //     //     loading={loading}
// //     //     pagination={{ pageSize: 10 }}
// //     //   />
// //     // </div>
// //     <div className="container mx-auto p-6">
// //     <div className="flex justify-between items-center mb-6">
// //       <h1 className="text-3xl font-bold">Internship Applications</h1>
// //       <Button
// //         type="primary"
// //         icon={<FileExcelOutlined />}
// //         onClick={exportToExcel}
// //       >
// //         Export to Excel
// //       </Button>
// //     </div>
// //     <Table
// //       dataSource={applications}
// //       columns={columns}
// //       rowKey="_id"
// //       loading={loading}
// //       pagination={{ pageSize: 10 }}
// //     />
// //   </div>
// //   );
// // };

// // export default InternshipAdmin;

























// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { Table, Button, Modal, Form, Input, DatePicker } from 'antd';
// // import { DownloadOutlined, DeleteOutlined, FileExcelOutlined, EditOutlined } from '@ant-design/icons';
// // import { toast } from 'react-toastify';
// // import * as XLSX from 'xlsx';
// // import { saveAs } from 'file-saver';
// // import moment from 'moment';

// // const { TextArea } = Input;

// // const InternshipAdmin = () => {
// //   const [applications, setApplications] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [editingApplication, setEditingApplication] = useState(null);
// //   const [form] = Form.useForm();

// //   useEffect(() => {
// //     const fetchApplications = async () => {
// //       try {
// //         const response = await axios.get('https://arrc-backend.onrender.com/api/v1/internships/internshipApplications');
// //         setApplications(response.data);
// //         setLoading(false);
// //       } catch (error) {
// //         toast.error('Failed to fetch applications. Please try again.');
// //         console.error('Error fetching applications:', error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchApplications();
// //   }, []);

// //   const downloadCV = (cvUrl) => {
// //     window.open(cvUrl, '_blank');
// //   };

// //   const deleteApplication = async (id) => {
// //     try {
// //       await axios.delete(`https://arrc-backend.onrender.com/api/v1/internships/internshipApplications/${id}`);
// //       setApplications(applications.filter(application => application._id !== id));
// //       toast.success('Application deleted successfully!');
// //     } catch (error) {
// //       toast.error('Failed to delete application.');
// //       console.error('Error deleting application:', error);
// //     }
// //   };

// //   const exportToExcel = () => {
// //     const ws = XLSX.utils.json_to_sheet(applications);
// //     const wb = XLSX.utils.book_new();
// //     XLSX.utils.book_append_sheet(wb, ws, 'Applications');
// //     const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
// //     saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'internship_applications.xlsx');
// //   };

// //   const handleEdit = (application) => {
// //     setEditingApplication(application);
// //     form.setFieldsValue({
// //       name: application.name,
// //       city: application.city,
// //       mobile: application.mobile,
// //       email: application.email,
// //       techSkills: application.techSkills,
// //       mode: application.mode,
// //       education: application.education,
// //       date: moment(application.date)
// //     });
// //   };

// //   const handleEditSubmit = async (values) => {
// //     try {
// //       await axios.put(`https://arrc-backend.onrender.com/api/v1/internships/internshipApplications/${editingApplication._id}`, values);
// //       setApplications(applications.map(app => app._id === editingApplication._id ? { ...app, ...values } : app));
// //       setEditingApplication(null);
// //       toast.success('Application updated successfully!');
// //     } catch (error) {
// //       toast.error('Failed to update application.');
// //       console.error('Error updating application:', error);
// //     }
// //   };

// //   const columns = [
// //     {
// //       title: 'Name',
// //       dataIndex: 'name',
// //       key: 'name',
// //     },
// //     {
// //       title: 'City',
// //       dataIndex: 'city',
// //       key: 'city',
// //     },
// //     {
// //       title: 'Mobile',
// //       dataIndex: 'mobile',
// //       key: 'mobile',
// //     },
// //     {
// //       title: 'Email',
// //       dataIndex: 'email',
// //       key: 'email',
// //     },
// //     {
// //       title: 'Tech Skills',
// //       dataIndex: 'techSkills',
// //       key: 'techSkills',
// //     },
// //     {
// //       title: 'Mode',
// //       dataIndex: 'mode',
// //       key: 'mode',
// //     },
// //     {
// //       title: 'Education',
// //       dataIndex: 'education',
// //       key: 'education',
// //     },
// //     {
// //       title: 'CV',
// //       dataIndex: 'cv',
// //       key: 'cv',
// //       render: (cv) => (
// //         <Button
// //           type="link"
// //           icon={<DownloadOutlined />}
// //           onClick={() => downloadCV(cv)}
// //         >
// //           Download CV
// //         </Button>
// //       ),
// //     },
// //     {
// //       title: 'Action',
// //       key: 'action',
// //       render: (_, record) => (
// //         <div>
// //           <Button
// //             type="link"
// //             icon={<EditOutlined />}
// //             onClick={() => handleEdit(record)}
// //           >
// //             Edit
// //           </Button>
// //           <Button
// //             type="link"
// //             icon={<DeleteOutlined />}
// //             onClick={() => deleteApplication(record._id)}
// //           >
// //             Delete
// //           </Button>
// //         </div>
// //       ),
// //     },
// //   ];

// //   return (
// //     <div className="container mx-auto p-6">
// //       <div className="flex justify-between items-center mb-6">
// //         <h1 className="text-3xl font-bold">Internship Applications</h1>
// //         <Button
// //           type="primary"
// //           icon={<FileExcelOutlined />}
// //           onClick={exportToExcel}
// //         >
// //           Export to Excel
// //         </Button>
// //       </div>
// //       <Table
// //         dataSource={applications}
// //         columns={columns}
// //         rowKey="_id"
// //         loading={loading}
// //         pagination={{ pageSize: 10 }}
// //       />
// //       <Modal
// //         title="Edit Application"
// //         visible={!!editingApplication}
// //         onCancel={() => setEditingApplication(null)}
// //         footer={null}
// //       >
// //         <Form
// //           form={form}
// //           onFinish={handleEditSubmit}
// //           layout="vertical"
// //         >
// //           <Form.Item name="name" label="Name" rules={[{ required: true }]}>
// //             <Input />
// //           </Form.Item>
// //           <Form.Item name="city" label="City" rules={[{ required: true }]}>
// //             <Input />
// //           </Form.Item>
// //           <Form.Item name="mobile" label="Mobile" rules={[{ required: true }]}>
// //             <Input />
// //           </Form.Item>
// //           <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
// //             <Input />
// //           </Form.Item>
// //           <Form.Item name="techSkills" label="Tech Skills" rules={[{ required: true }]}>
// //             <TextArea rows={4} />
// //           </Form.Item>
// //           <Form.Item name="mode" label="Mode" rules={[{ required: true }]}>
// //             <Input />
// //           </Form.Item>
// //           <Form.Item name="education" label="Education" rules={[{ required: true }]}>
// //             <Input />
// //           </Form.Item>
// //           <Form.Item name="date" label="Date" rules={[{ required: true }]}>
// //             <DatePicker format="YYYY-MM-DD" style={{ width: '100%' }} />
// //           </Form.Item>
// //           <Form.Item>
// //             <Button type="primary" htmlType="submit">
// //               Save Changes
// //             </Button>
// //           </Form.Item>
// //         </Form>
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default InternshipAdmin;


















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Table, Button, Modal, Form, Input, DatePicker } from 'antd';
// import { DownloadOutlined, DeleteOutlined, FileExcelOutlined, EditOutlined } from '@ant-design/icons';
// import { toast } from 'react-toastify';
// import * as XLSX from 'xlsx';
// import { saveAs } from 'file-saver';
// import moment from 'moment';
// import { saveAs as fileSaverSaveAs } from 'file-saver'; // Import file-saver separately

// const { TextArea } = Input;

// const InternshipAdmin = () => {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editingApplication, setEditingApplication] = useState(null);
//   const [form] = Form.useForm();

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

//   const downloadCV = async (cvUrl) => {
//     try {
//       const response = await axios.get(cvUrl, { responseType: 'blob' });
//       const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
//       fileSaverSaveAs(pdfBlob, 'cv.pdf');
//     } catch (error) {
//       toast.error('Failed to download CV.');
//       console.error('Error downloading CV:', error);
//     }
//   };

//   const deleteApplication = async (id) => {
//     try {
//       await axios.delete(`https://arrc-backend.onrender.com/api/v1/internships/internshipApplications/${id}`);
//       setApplications(applications.filter(application => application._id !== id));
//       toast.success('Application deleted successfully!');
//     } catch (error) {
//       toast.error('Failed to delete application.');
//       console.error('Error deleting application:', error);
//     }
//   };

//   const exportToExcel = () => {
//     const ws = XLSX.utils.json_to_sheet(applications);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Applications');
//     const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
//     saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'internship_applications.xlsx');
//   };

//   const handleEdit = (application) => {
//     setEditingApplication(application);
//     form.setFieldsValue({
//       name: application.name,
//       city: application.city,
//       mobile: application.mobile,
//       email: application.email,
//       techSkills: application.techSkills,
//       mode: application.mode,
//       education: application.education,
//       date: moment(application.date)
//     });
//   };

//   const handleEditSubmit = async (values) => {
//     try {
//       await axios.put(`https://arrc-backend.onrender.com/api/v1/internships/internshipApplications/${editingApplication._id}`, values);
//       setApplications(applications.map(app => app._id === editingApplication._id ? { ...app, ...values } : app));
//       setEditingApplication(null);
//       toast.success('Application updated successfully!');
//     } catch (error) {
//       toast.error('Failed to update application.');
//       console.error('Error updating application:', error);
//     }
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
//     {
//       title: 'Action',
//       key: 'action',
//       render: (_, record) => (
//         <div>
//           <Button
//             type="link"
//             icon={<EditOutlined />}
//             onClick={() => handleEdit(record)}
//           >
//             Edit
//           </Button>
//           <Button
//             type="link"
//             icon={<DeleteOutlined />}
//             onClick={() => deleteApplication(record._id)}
//           >
//             Delete
//           </Button>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="container mx-auto p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Internship Applications</h1>
//         <Button
//           type="primary"
//           icon={<FileExcelOutlined />}
//           onClick={exportToExcel}
//         >
//           Export to Excel
//         </Button>
//       </div>
//       <Table
//         dataSource={applications}
//         columns={columns}
//         rowKey="_id"
//         loading={loading}
//         pagination={{ pageSize: 10 }}
//       />
//       <Modal
//         title="Edit Application"
//         visible={!!editingApplication}
//         onCancel={() => setEditingApplication(null)}
//         footer={null}
//       >
//         <Form
//           form={form}
//           onFinish={handleEditSubmit}
//           layout="vertical"
//         >
//           <Form.Item name="name" label="Name" rules={[{ required: true }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item name="city" label="City" rules={[{ required: true }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item name="mobile" label="Mobile" rules={[{ required: true }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item name="techSkills" label="Tech Skills" rules={[{ required: true }]}>
//             <TextArea rows={4} />
//           </Form.Item>
//           <Form.Item name="mode" label="Mode" rules={[{ required: true }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item name="education" label="Education" rules={[{ required: true }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item name="date" label="Date" rules={[{ required: true }]}>
//             <DatePicker format="YYYY-MM-DD" style={{ width: '100%' }} />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Save Changes
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default InternshipAdmin;





















































import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { Table, Button, Modal, Form, Input, DatePicker } from 'antd';
import { DownloadOutlined, DeleteOutlined, FileExcelOutlined, EditOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import { saveAs } from 'file-saver';
import moment from 'moment';

const { TextArea } = Input;

const InternshipAdmin = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApplications, setSelectedApplications] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editingApplication, setEditingApplication] = useState(null);
  const [form] = Form.useForm();

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

  const handleSelectApplication = (id) => {
    if (selectedApplications.includes(id)) {
      setSelectedApplications(selectedApplications.filter(appId => appId !== id));
    } else {
      setSelectedApplications([...selectedApplications, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedApplications([]);
    } else {
      const allApplicationIds = applications.map(app => app._id);
      setSelectedApplications(allApplicationIds);
    }
    setSelectAll(!selectAll);
  };

  const deleteSelectedApplications = async () => {
    try {
      if (selectedApplications.length > 0) {
        await Promise.all(selectedApplications.map(id => axios.delete(`/api/v1/internships/internshipApplications/${id}`)));
        setApplications(applications.filter(app => !selectedApplications.includes(app._id)));
        setSelectedApplications([]);
        setSelectAll(false);
        toast.success('Selected applications deleted successfully!');
      } else {
        toast.info('No applications selected');
      }
    } catch (error) {
      toast.error('Failed to delete selected applications.');
      console.error('Error deleting applications:', error);
    }
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(applications);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Applications');
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'internship_applications.xlsx');
  };

  const downloadCV = async (cvUrl) => {
    try {
      const response = await axios.get(cvUrl, { responseType: 'blob' });
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      saveAs(pdfBlob, 'cv.pdf');
    } catch (error) {
      toast.error('Failed to download CV.');
      console.error('Error downloading CV:', error);
    }
  };

  const handleEdit = (application) => {
    setEditingApplication(application);
    form.setFieldsValue({
      name: application.name,
      city: application.city,
      mobile: application.mobile,
      email: application.email,
      techSkills: application.techSkills,
      mode: application.mode,
      education: application.education,
      date: moment(application.date)
    });
  };

  const handleEditSubmit = async (values) => {
    try {
      await axios.put(`https://arrc-backend.onrender.com/api/v1/internships/internshipApplications/${editingApplication._id}`, values);
      setApplications(applications.map(app => app._id === editingApplication._id ? { ...app, ...values } : app));
      setEditingApplication(null);
      toast.success('Application updated successfully!');
    } catch (error) {
      toast.error('Failed to update application.');
      console.error('Error updating application:', error);
    }
  };

  const columns = [
    {
      title: <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />,
      key: 'selectAll',
      render: (_, record) => (
        <input
          type="checkbox"
          checked={selectedApplications.includes(record._id)}
          onChange={() => handleSelectApplication(record._id)}
        />
      ),
    },
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
        align: 'center', // This will center the title and content

      render: (cv) => (
        <Button
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
              align: 'center', // This will center the title and content

      render: (_, record) => (
        <div className='space-x-2'> 
          <Button
            className="bg-blue-500 text-white     hover:bg-blue-600"

            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            edit
          </Button>
          <Button
          className="bg-red-500 text-white hover:bg-red-600"
          type="link"
            icon={<DeleteOutlined />}
            onClick={() => deleteApplication(record._id)}
            
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Internship Applications</h1>
        <div className="space-x-2">
          <Button
            type="primary"

            icon={<FileExcelOutlined />}
            onClick={exportToExcel}
          >
            Export to Excel
          </Button>
          <Button
          className="bg-red-500 text-white hover:bg-red-600"
          icon={<DeleteOutlined />}

            type="Danger"
            onClick={deleteSelectedApplications}
            disabled={selectedApplications.length === 0}
          >
            Delete Selected
          </Button>
        </div>
      </div>
      <Table
        dataSource={applications}
        columns={columns}
        rowKey="_id"
        loading={loading}
        pagination={{ pageSize: 10 }}
      />
      <Modal
        title="Edit Application"
        visible={!!editingApplication}
        onCancel={() => setEditingApplication(null)}
        footer={null}
      >
        <Form
          form={form}
          onFinish={handleEditSubmit}
          layout="vertical"
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="city" label="City" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="mobile" label="Mobile" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="techSkills" label="Tech Skills" rules={[{ required: true }]}>
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item name="mode" label="Mode" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="education" label="Education" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="date" label="Date" rules={[{ required: true }]}>
            <DatePicker format="YYYY-MM-DD" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default InternshipAdmin;
