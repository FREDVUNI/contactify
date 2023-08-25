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
  const [error, setError] = useState("");

  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9 ]+$/;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputs.name || !inputs.email || !inputs.phone) {
      setError("All fields are required.");
      return;
    }
    if (!nameRegex.test(inputs.name)) {
      setError("Invalid name format.");
      return;
    }
    if (!emailRegex.test(inputs.email)) {
      setError("Invalid email format.");
      return;
    }
    if (!phoneRegex.test(inputs.phone)) {
      setError("Invalid phone format.");
      return;
    }
    try {
      dispatch({
        type: contactActions.ADD_CONTACT,
        payload: addContact(inputs),
      });
      setInputs({ name: "", email: "", phone: "" });
      setError("");
    } catch (error) {
      setError("Something went wrong.");
    }
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
      value={{ handleSubmit, inputs, setInputs, state, error }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
