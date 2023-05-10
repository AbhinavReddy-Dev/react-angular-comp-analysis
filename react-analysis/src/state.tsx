import React, { Dispatch } from "react";

export const GlobalStateContext = React.createContext({} as { products: any });
export const GlobalDispatchContext = React.createContext(
  {} as Dispatch<{ type: any; payload: any }>
);

const initialState = {
  products: [],
};

function reducer(state: any, action: { type: any; payload: any }) {
  switch (action.type) {
    case "SET_PRODUCTS": {
      return {
        ...state,
        products: action.payload,
      };
    }
    case "GET_PRODUCTS": {
      return {
        ...state,
        products: action.payload,
      };
    }

    default:
      throw new Error("Bad Action Type");
  }
}

const GlobalProvider = (props: any) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {props.children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalProvider;
