import React, { useReducer,useEffect } from "react";
import { contactsData } from "../data/contacts";
import Contact from "./Contact";
import { contactReducer, initialState } from "../reducers";

const Contacts = () => {
  // const contactsData = [
  //   {
  //     name: 'John Doe',
  //     email: 'john.doe@example.com',
  //     phone: '123-456-7890',
  //   },
  // ];
  const [state,dispatch] = useReducer(contactReducer,initialState)

  useEffect(() => {
    dispatch({ type: "GET_CONTACTS", payload: contactsData });
  }, []);


  console.log(state);
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
            <Contact contact={contact} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
