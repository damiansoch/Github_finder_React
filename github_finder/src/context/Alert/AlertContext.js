import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  //useReducer hooks
  const [state, dispatch] = useReducer(alertReducer, initialState);

  //actual function to set an alert
  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });

    //we want message to dissapear after few sec so:
    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };

  // we need tto take care of the actions in the reducer
  // SET_ALERT, REMOVE_ALERT

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
export default AlertContext;
