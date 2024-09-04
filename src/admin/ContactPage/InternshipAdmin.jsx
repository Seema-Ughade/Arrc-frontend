import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form, Input, DatePicker } from 'antd';
import { DownloadOutlined, DeleteOutlined, FileExcelOutlined, EditOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import moment from 'moment';

const { TextArea } = Input;

const InternshipAdmin = () => {
  const [applications, setApplications] = useState([]);
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
        <div>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Button
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
