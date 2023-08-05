import React, { useReducer, useState } from "react";
import { contactReducer, initialState } from "../reducers";
import { contactActions } from "../actions";

const AddContact = () => {
  const [state,dispatch] = useReducer(contactReducer, initialState);
  const [inputs, setInputs] = useState({
    name: "",
  });

  const addContact = (inputs) => {
    return { id: Date.now(), name: inputs.name };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: contactActions.ADD_CONTACT, payload: addContact(inputs) });
  };
  console.log(state)
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
            placeholder="Enter name"
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter phone" />
        </div> */}
        <div className="form-group">
          <button className="btn-primary">Add Contact</button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
