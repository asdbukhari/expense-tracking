import React from "react";
import ExpenseItem from "../ExpenseItem";

const ExpenseList = (props) => {
  let variableToRender;
  // console.log(props);
  if (props.item.length === 0) {
    variableToRender = <p>No object found</p>;
  } else if (props.item.length > 0) {
    variableToRender = props.item.map((expense) => {
      return <ExpenseItem key={expense.id} expenseItem={expense} />;
    });
  }

  return <div>{variableToRender}</div>;
};

export default ExpenseList;
