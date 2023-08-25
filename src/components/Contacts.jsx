import React, { useContext } from "react";
// import { contactsData } from "../data/contacts";
import Contact from "./Contact";
import { ContactsContext } from "../context";

const Contacts = () => {
  const { state } = useContext(ContactsContext);
  return (
    <div className="add-contact">
      {state.length > 0 ? (
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
            {state.map((contact, index) => (
              <Contact contact={contact} key={index} />
            ))}
          </tbody>
        </table>
      ) : (
        <span className="text-danger">There are no contacts yet.</span>
      )}
    </div>
  );
};

export default Contacts;
