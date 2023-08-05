import { contactActions } from "../actions";
export const initialState = [];
export const contactReducer = (state, action) => {
  switch (action.type) {
    case contactActions.ADD_CONTACT:
      return [...state, action.payload];
    default:
      return state;
  }
};
