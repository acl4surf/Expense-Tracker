// Reducer manages state changes in response to app actions
export default (state, action) => {
  switch (action.type) {
    case "DELETE_ITEM":
      console.log("delete called", state);
      return {
        ...state,
        transactions: state.transactions.filter((t) => t.id !== action.payload),
      };
    case "ADD_ITEM":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
