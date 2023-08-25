import React, { useContext } from "react";
import { ContactsContext } from "../context";

const AddContact = () => {
  const { inputs, setInputs, handleSubmit, error } =
    useContext(ContactsContext);
  return (
    <div className="add-contact">
      <h2>Add Contact</h2>
      {error && <span>{error}</span>}
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
