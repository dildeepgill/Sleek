import { createContext, useReducer } from "react";
import LightModeR from "./lightModeR.jsx";
const INITIAL_STATE = {
  LightMode: false,
};

export const LightModeContext = createContext(INITIAL_STATE);

export const LightModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LightModeR, INITIAL_STATE);
  return (
    <LightModeContext.Provider value={{ LightMode: state.LightMode, dispatch }}>
      {children}
    </LightModeContext.Provider>
  );
};
