import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactUsAdmin = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('https://arrc-backend.onrender.com/api/v1/contacts');
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Contact Us Entries</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b text-left">Name</th>
                            <th className="py-2 px-4 border-b text-left">Email</th>
                            <th className="py-2 px-4 border-b text-left">Phone</th>
                            <th className="py-2 px-4 border-b text-left">Message</th>
                            <th className="py-2 px-4 border-b text-left">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map(contact => (
                            <tr key={contact._id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{contact.name}</td>
                                <td className="py-2 px-4 border-b">{contact.email}</td>
                                <td className="py-2 px-4 border-b">{contact.phone}</td>
                                <td className="py-2 px-4 border-b whitespace-pre-wrap">
                                    {contact.message}
                                </td>
                                <td className="py-2 px-4 border-b">{new Date(contact.createdAt).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContactUsAdmin;
