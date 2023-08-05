import React from 'react';
import contactImage from '../assets/contact.png';
import { contactsData } from '../data/contacts';
import Contact from './Contact';

const Contacts = () => {
  // const contactsData = [
  //   {
  //     name: 'John Doe',
  //     email: 'john.doe@example.com',
  //     phone: '123-456-7890',
  //   },
  // ];

  return (
    <div className="add-contact">
      <table className="contacts-table">
        <thead>
          <tr>
            <th className="fixed-column">Image</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contactsData.map((contact, index) => (
            <Contact contact={contact} key={index}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
