import React from "react";
import ExpenseItem from "../ExpenseItem";

const ExpenseList = (props) => {
  return (
    <div>
      {props.item.map((expense) => {
        return <ExpenseItem key={expense.id} expenseItem={expense} />;
      })}
    </div>
  );
};

export default ExpenseList;
