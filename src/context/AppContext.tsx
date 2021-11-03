import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

export interface IContact {
  id: number;
  firstName: string;
  lastName: string;
  phone: number;
}

export interface IAppState {
  contact: IContact[];
  dateAdded: string;
}

interface IAppContext {
  state: IAppState;
  addNewContact: (contact: IContact) => void;
}

export const AppInitialState: IAppState = {
  contact: [],
  dateAdded: "",
};

export const AppContext = createContext({} as IAppContext);

export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(AppReducer, AppInitialState);

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
