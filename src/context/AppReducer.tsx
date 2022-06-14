import { IAppState, IContact } from "./AppContext";

interface ContactPayload {
  contact: IContact;
}

type AppActions = { type: "ADD_CONTACT"; payload: ContactPayload };

export const AppReducer = (state: IAppState, action: AppActions) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload.contact],
        dateAdded: new Date(),
      };

    default:
      return state;
  }
};
