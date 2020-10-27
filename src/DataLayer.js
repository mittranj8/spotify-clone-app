import React, { useContext, createContext, useReducer } from "react";

export const DataLayerContext = createContext();

// children = App (any sub-component inside DataLayer Component)
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
