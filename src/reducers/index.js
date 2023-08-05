import { contactActions } from "../actions";
export const initialState = [];
export const contactReducer = (state, action) => {
  switch (action.type) {
    case contactActions.ADD_CONTACT:
      alert("yes");
    default:
      return state;
  }
};
