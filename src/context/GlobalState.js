import { Children, createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  transactions: [
    // { id: 1, text: "Motor Oil", amount: -25 },
    // { id: 2, text: "Salary", amount: 300 },
    // { id: 3, text: "Book", amount: -10 },
    // { id: 4, text: "Camera", amount: 150 },
  ],
};
// Create context
export const GlobalContext = createContext(initialState);
// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //Actions
  function deleteItem(id) {
    dispatch({
      type: "DELETE_ITEM",
      payload: id,
    });
  }
  function addItem(transaction) {
    dispatch({
      type: "ADD_ITEM",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteItem,
        addItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
