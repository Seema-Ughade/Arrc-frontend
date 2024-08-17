import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactUsAdmin = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('https://arrc-backend.onrender.com/contacts');
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Contact Us Entries</h2>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Phone</th>
                        <th className="py-2 px-4 border-b">Message</th>
                        <th className="py-2 px-4 border-b">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr key={contact._id}>
                            <td className="py-2 px-4 border-b">{contact.name}</td>
                            <td className="py-2 px-4 border-b">{contact.email}</td>
                            <td className="py-2 px-4 border-b">{contact.phone}</td>
                            <td className="py-2 px-4 border-b">{contact.message}</td>
                            <td className="py-2 px-4 border-b">{new Date(contact.createdAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactUsAdmin;
