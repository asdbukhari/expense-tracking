import { useState } from "react";
import Card from "../../UI/Card";
import ExpenseChart from "../ExpenseChart";
import ExpenseList from "../ExpenseList";
import FilteredExpense from "../FilteredExpense";

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = value => {
    setFilteredYear(value);
  };

  const filterExpense = props.data.filter(item => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card>
        <FilteredExpense selected={filteredYear} onFilterYear={filterChangeHandler} />
        <ExpenseChart expenses={filterExpense} />
        <ExpenseList item={filterExpense} />
      </Card>
    </>
  );
};

export default Expenses;
