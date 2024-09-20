import React from 'react';
import { Button, Tooltip } from 'antd'; // Import Tooltip from Ant Design
import { DownloadOutlined } from '@ant-design/icons'; // Import the download icon
import pdfFile from '../assets/IT-Solutions-Arrc-Technology.pdf'; // Import the PDF file

const CatalogDownload = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile; // Use the imported PDF file
    link.setAttribute('download', 'IT-Solutions-Arrc-Technology.pdf'); // Optional: set the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={styles.container}>
      <Tooltip title="Catalog Download">
        <Button 
          className='bg-purple-500 p-4'
          type="primary" 
          icon={<DownloadOutlined size={40} />} 
          onClick={handleDownload} 
          style={styles.button}
          shape="circle" // Make the button circular
          size="large" // Adjust the size if needed
        />
      </Tooltip>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: '80px', 
    right: '18px', 
    zIndex: 50 
  },
  button: {
    borderColor: '#6A0DAD', // Purple color
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '26px', // Larger font size for better visibility
    padding: '24px', // Adjust padding for circle button
    borderRadius: '50%', // Circular button
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' // Optional: add shadow for better visibility
  }
};

export default CatalogDownload;
