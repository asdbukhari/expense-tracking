import { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import GenerateExpense from "./components/NewExpense/GenerateExpense";

let INITIAL_EXPENSE = [
  {
    id: "e1",
    title: "Internet Packages",
    price: 600,
    date: new Date(2021, 2, 17),
  },
  {
    id: "e2",
    title: "Bike Petrol",
    price: 2500,
    date: new Date(2021, 3, 17),
  },
  {
    id: "e3",
    title: "Lunch",
    price: 1200,
    date: new Date(2021, 5, 17),
  },
  {
    id: "e4",
    title: "Others",
    price: 5000,
    date: new Date(2020, 7, 17),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSE);

  const saveExpenseDate = expense => {
    setExpenses(prevExpense => [...prevExpense, expense]);
  };

  return (
    <>
      <span className="notification">Practice project</span>
      <GenerateExpense onSaveExpenseDate={saveExpenseDate} />
      <Expenses data={expenses} />
    </>
  );
}

export default App;
