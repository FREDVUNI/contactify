import React, { useState, useReducer, createContext, useEffect } from "react";
import { contactReducer, initialState } from "../reducers";
import { contactActions } from "../actions";
import { v4 as uuidv4 } from "uuid";

export const ContactsContext = createContext();
export const ContactsProvider = ({ children }) => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [state, dispatch] = useReducer(contactReducer, initialState);
  const addContact = (inputs) => {
    let photoId = uuidv4();
    return {
      id: Date.now(),
      name: inputs.name,
      email: inputs.email,
      phone: inputs.phone,
      date_created: new Date(Date.now()).toLocaleString(),
      photo: `https://robohash.org/${photoId}.png`,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: contactActions.ADD_CONTACT, payload: addContact(inputs) });
    inputs.email = "";
    inputs.name = "";
    inputs.phone = "";
  };
  localStorage.setItem("contacts", JSON.stringify(state));

  const getData = () => {
    dispatch({ type: contactActions.GET_CONTACTS, payload: initialState });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <ContactsContext.Provider
      value={{ handleSubmit, inputs, setInputs, state }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
