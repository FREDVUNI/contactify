import React, { useReducer, useState } from "react";
import { contactReducer, initialState } from "../reducers";
import { contactActions } from "../actions";

const AddContact = () => {
  const [state, dispatch] = useReducer(contactReducer, initialState);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const addContact = (inputs) => {
    let photoId = Date.now()
    return {
      id: Date.now(),
      name: inputs.name,
      email: inputs.email,
      phone: inputs.phone,
      photo:`https://robohash.org/${photoId}.png`
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: contactActions.ADD_CONTACT, payload: addContact(inputs) });
    inputs.email = ""
    inputs.name = ""
    inputs.phone = ""
  };
  // console.log(state);
  localStorage.setItem("contacts",JSON.stringify(state))
  return (
    <div className="add-contact">
      <h2>Add Contact</h2>
      <form className="add-contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={inputs.name}
            placeholder="Enter name"
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter phone"
            value={inputs.phone}
            onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
          />
        </div>
        <div className="form-group">
          <button className="btn-primary">Add Contact</button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
