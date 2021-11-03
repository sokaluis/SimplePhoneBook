import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";
import uniqid from "uniqid";

export interface IContact {
  id: string;
  firstName: string;
  lastName: string;
  phone: number;
}

export interface IAppState {
  contacts: IContact[];
  dateAdded: string;
}

interface IAppContext {
  state: IAppState;
  addNewContact: (contact: IContact) => void;
}

export const AppInitialState: IAppState = {
  contacts: [
    {
      id: uniqid(),
      firstName: "Luis",
      lastName: "Azocar",
      phone: 1134837364,
    },
  ],
  dateAdded: "",
};

export const AppContext = createContext({} as IAppContext);

export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(AppReducer, AppInitialState);

  console.log("state", state);

  const addNewContact = (contact: IContact) => {
    dispatch({
      type: "ADD_CONTACT",
      payload: {
        contact,
      },
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        addNewContact,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
