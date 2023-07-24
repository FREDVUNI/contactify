import React from 'react';
import contactImage from '../assets/contact.png';

const Contacts = () => {
  const contactsData = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
    },
  ];

  return (
    <div className="contacts-container">
      <table className="contacts-table">
        <thead>
          <tr>
            <th className="fixed-column">Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contactsData.map((contact, index) => (
            <tr key={index}>
              <td className="fixed-column">
                <img src={contactImage} alt="Contact" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
