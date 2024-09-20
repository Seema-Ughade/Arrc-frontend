import React from 'react';
import { Button } from 'antd';
import { MenuOutlined, CloseOutlined, UserOutlined, MoonOutlined, SunOutlined, LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const AdminNavbar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleDarkMode = () => {
    // Implement dark mode functionality
    console.log('Switching to dark mode');
  };

  const handleLightMode = () => {
    // Implement light mode functionality
    console.log('Switching to light mode');
  };

  const handleLogout = () => {
    // Clear authentication token or state
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
  
    // Redirect to home page with MainLayout
    navigate('/', { replace: true });
  
    // Optionally, refresh the page
    window.location.reload();
  };
  
  return (
    <header className="flex items-center justify-between p-4 bg-white sticky top-0 shadow-md z-50">
      {/* Toggle Button */}
      <Button type="link" onClick={toggleCollapsed} style={{ marginRight: '1rem' }}>
        {collapsed ? <MenuOutlined style={{ fontSize: '1.5rem' }} /> : <CloseOutlined style={{ fontSize: '1.5rem' }} />}
      </Button>

      {/* Dark and Light Mode Buttons */}
      <div className="flex items-center ml-auto space-x-4">
        <Button type="link" onClick={handleDarkMode} icon={<MoonOutlined />} className="hidden md:inline" />
        <Button type="link" onClick={handleLightMode} icon={<SunOutlined />} className="hidden md:inline" />

        {/* Responsive Dark and Light Mode Buttons */}
        {/* <div className="md:hidden">
          <Button type="link" onClick={handleDarkMode} icon={<MoonOutlined />} />
          <Button type="link" onClick={handleLightMode} icon={<SunOutlined />} />
        </div> */}

        {/* User Icon and Logout Button */}
        <div className="flex items-center space-x-4">
          <UserOutlined style={{ fontSize: '1.5rem' }} />
          <span className="ml-2">Arrc Technology</span>
          <Button type="link" onClick={handleLogout} icon={<LogoutOutlined />} className="ml-4 text-white hover:text-black bg-red-500 rounded-md">
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
