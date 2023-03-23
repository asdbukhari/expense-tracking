import React from "react";
import ExpenseItem from "../ExpenseItem";

const ExpenseList = props => {
  if (props.item.length === 0) {
    return <h2>No object found</h2>;
  }

  return (
    <>
      {props.item.map(expense => {
        return <ExpenseItem key={expense.id} expenseItem={expense} />;
      })}
    </>
  );
};

export default ExpenseList;
