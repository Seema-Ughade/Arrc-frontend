import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DashboardOutlined, FileTextOutlined, AppstoreOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
import logomain from '../../assets/logomain.jpeg';

const { Sider } = Layout;

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    { key: 'InternshipAdmin', icon: <AppstoreOutlined />, label: 'Internship', to: '/InternshipAdmin' },
    { key: 'contactus', icon: <FileTextOutlined />, label: 'Contact Us', to: '/contactus' },
    { key: 'courses', icon: <DashboardOutlined />, label: 'Courses', to: '/courses' },
  ];

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} className='bg-white'>
      <div className="logo">
        <img src={logomain} className="w-[100%] h-[50%]" alt="Logo" />
      </div>
      <Button 
        type="link" 
        onClick={toggleCollapsed} 
        style={{ position: 'absolute', right: '16px', top: '16px' }}>
        {collapsed ? <MenuOutlined /> : <CloseOutlined style={{ color: '#fff' }} />}
      </Button>
      <Menu
        className="mt-5"
        theme="light"
        mode="inline"
        defaultSelectedKeys={['internship']}
        onClick={({ key }) => {
          navigate(key);
        }}
        inlineCollapsed={collapsed}
        style={{ backgroundColor: '#fff', fontWeight: '600' }}
      >
        {menuItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.to} className="hover:text-blue-500">
              {item.label}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default AdminSidebar;
