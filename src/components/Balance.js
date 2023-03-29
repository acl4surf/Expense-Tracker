import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const context = useContext(GlobalContext);
  //console.log("context", context);
  const amounts = context.transactions.map((t) => t.amount);
  console.log("amount", amounts);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};
