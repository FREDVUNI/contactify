import React from 'react';

const AddContact = () => {
  return (
    <div className="add-contact">
      <h2>Add Contact</h2>
      <form className="add-contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter phone" />
        </div>
        <div className="form-group">
            <button className="btn-primary">Add Contact</button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
