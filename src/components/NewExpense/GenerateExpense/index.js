import React from "react";
import ExpenseForm from "../ExpenseForm";
import Card from "../../UI/Card";

const GenerateExpense = props => {
  const dataGeneratedHandler = expenseData => {
    const expense = {
      ...expenseData,
      id: (Math.random() * (10 - 1 + 1)).toString(),
    };
    props.onSaveExpenseDate(expense);
  };

  return (
    <Card>
      <ExpenseForm onGenerateData={dataGeneratedHandler} />
    </Card>
  );
};

export default GenerateExpense;
