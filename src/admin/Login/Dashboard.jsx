import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';
import InternshipAdmin from '../ContactPage/InternshipAdmin';
import ContactusAdmin from '../ContactPage/ContactusAdmin';
import CoursesAdmin from '../Course/CoursesAdmin';

const Dashboard = ({ handleLogout }) => {
    return (
        <div className="flex h-[100vh] ">
            <AdminSidebar  className = ' '/>
            <div className="flex-1 flex flex-col">
                <AdminNavbar handleLogout={handleLogout} />
                <main className="flex-1 p-6 bg-gray-100">
                    <Routes>
                        <Route path="/InternshipAdmin" element={<InternshipAdmin />} />
                        <Route path="/contactus" element={<ContactusAdmin />} />
                        <Route path="/courses" element={<CoursesAdmin />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
