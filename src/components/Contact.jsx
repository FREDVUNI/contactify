import React from "react";

const Contact = ({contact}) => {
  return (
    <tr>
      <td className="fixed-column">
        <img src={contact.photo} alt="Contact" />
      </td>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
};

export default Contact;
