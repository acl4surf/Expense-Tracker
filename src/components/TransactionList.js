import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  //const context = useContext(GlobalContext);
  // console.log(context.transactions);
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((t) => (
          <Transaction key={t.id} transaction={t} />
        ))}
      </ul>
    </>
  );
};
