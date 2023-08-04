import { contactActions } from "../actions";
export const contactReducer = (state, actions) => {
  switch (actions.type) {
    case contactActions.ADD_CONTACT:
      alert("yes");
    default:
      return state;
  }
};
