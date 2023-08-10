import { contactActions } from "../actions";

const getData = JSON.parse(localStorage.getItem("contacts"));
export const initialState = getData ? getData : [];
export const contactReducer = (state, action) => {
  switch (action.type) {
    case contactActions.ADD_CONTACT:
      return [...state, action.payload];
    case contactActions.GET_CONTACTS:
      return action.payload;
    default:
      return state;
  }
};
