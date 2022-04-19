import { rootReducer, initRootState }  from "../reducers";
import React, { createContext, useReducer } from "react";

const StoreContext = createContext(initRootState);

const StoreProvider = ({ children }) => {

  const [state, dispatch] = useReducer(rootReducer, initRootState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );

};

export { StoreContext, StoreProvider };
