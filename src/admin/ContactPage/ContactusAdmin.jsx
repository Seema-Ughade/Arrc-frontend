// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ContactUsAdmin = () => {
//     const [contacts, setContacts] = useState([]);

//     useEffect(() => {
//         const fetchContacts = async () => {
//             try {
//                 const response = await axios.get('https://arrc-backend.onrender.com/api/v1/contacts');
//                 setContacts(response.data);
//             } catch (error) {
//                 console.error('Error fetching contacts:', error);
//             }
//         };

//         fetchContacts();
//     }, []);

//     return (
//         <div className="container mx-auto p-6">
//             <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Contact Us Entries</h2>
//             <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white border border-gray-200">
//                     <thead>
//                         <tr>
//                             <th className="py-2 px-4 border-b text-left">Name</th>
//                             <th className="py-2 px-4 border-b text-left">Email</th>
//                             <th className="py-2 px-4 border-b text-left">Phone</th>
//                             <th className="py-2 px-4 border-b text-left">Message</th>
//                             <th className="py-2 px-4 border-b text-left">Date</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {contacts.map(contact => (
//                             <tr key={contact._id} className="hover:bg-gray-100">
//                                 <td className="py-2 px-4 border-b">{contact.name}</td>
//                                 <td className="py-2 px-4 border-b">{contact.email}</td>
//                                 <td className="py-2 px-4 border-b">{contact.phone}</td>
//                                 <td className="py-2 px-4 border-b whitespace-pre-wrap">
//                                     {contact.message}
//                                 </td>
//                                 <td className="py-2 px-4 border-b">{new Date(contact.createdAt).toLocaleString()}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default ContactUsAdmin;










import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactUsAdmin = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedContacts, setSelectedContacts] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/api/v1/contacts');
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts();
    }, []);

    // Handle select individual contact
    const handleSelectContact = (id) => {
        if (selectedContacts.includes(id)) {
            setSelectedContacts(selectedContacts.filter(contactId => contactId !== id));
        } else {
            setSelectedContacts([...selectedContacts, id]);
        }
    };

    // Handle select all contacts
    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedContacts([]);
        } else {
            const allContactIds = contacts.map(contact => contact._id);
            setSelectedContacts(allContactIds);
        }
        setSelectAll(!selectAll);
    };

    // Handle delete all selected contacts
    const handleDeleteSelected = async () => {
        try {
            if (selectedContacts.length > 0) {
                await Promise.all(selectedContacts.map(id => axios.delete(`http://127.0.0.1:5000/api/v1/contacts/${id}`)));
                setContacts(contacts.filter(contact => !selectedContacts.includes(contact._id)));
                setSelectedContacts([]);
                setSelectAll(false);
                alert('Selected contacts deleted successfully!');
            } else {
                alert('No contacts selected');
            }
        } catch (error) {
            console.error('Error deleting contacts:', error);
            alert('Failed to delete selected contacts');
        }
    };

    // Handle delete all contacts
    const handleDeleteAll = async () => {
        try {
            await axios.delete('http://127.0.0.1:5000/api/v1/contacts');
            setContacts([]);
            setSelectedContacts([]);
            setSelectAll(false);
            alert('All contacts deleted successfully!');
        } catch (error) {
            console.error('Error deleting all contacts:', error);
            alert('Failed to delete all contacts');
        }
    };

    return (
        <div className="container mx-auto p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Contact Us Entries</h2>
                <div className="space-x-2">
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={handleDeleteSelected}
                        disabled={selectedContacts.length === 0}
                    >
                        Delete Selected
                    </button>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={handleDeleteAll}
                    >
                        Delete All
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">
                                <input
                                    type="checkbox"
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                />
                            </th>
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
                                <td className="py-2 px-4 border-b">
                                    <input
                                        type="checkbox"
                                        checked={selectedContacts.includes(contact._id)}
                                        onChange={() => handleSelectContact(contact._id)}
                                    />
                                </td>
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
