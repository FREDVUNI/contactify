import React from "react";

const Contact = ({ contact }) => {
  return (
    <tr>
      <td className="fixed-column">
        <img src={contact.photo} alt="Contact" />
      </td>
      <td>
        {contact.name}
        <small>{new Date(contact.date_created).toLocaleString()}</small>
      </td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
};

export default Contact;
