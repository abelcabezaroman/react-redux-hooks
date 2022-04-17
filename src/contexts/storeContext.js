import { rootReducer, initRootState }  from "../reducers";
import React, { createContext, useReducer, useEffect } from "react";

const StoreContext = createContext(initRootState);

const StoreProvider = ({ children }) => {

  const [state, dispatch] = useReducer(rootReducer, initRootState);

  useEffect(() => console.log({ newState: state }), [state]);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );

};

export { StoreContext, StoreProvider };
