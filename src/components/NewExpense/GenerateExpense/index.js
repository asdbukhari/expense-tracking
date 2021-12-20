import React from "react";
import ExpenseForm from "../ExpenseForm";

const GenerateExpense = (props) => {
  const dataGeneratedHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onSaveExpenseDate(expense);
  };

  return <ExpenseForm onGenerateData={dataGeneratedHandler} />;
};

export default GenerateExpense;
