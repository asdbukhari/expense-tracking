import { useState } from "react";

import Card from "../../UI/Card";
import ExpenseList from "../ExpenseList";
import FilteredExpense from "../FilteredExpense";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2020);

  const filterChangeHandler = (value) => {
    setFilteredYear(value);
  };

  const filterExpense = props.data.filter((item) => {
    // console.log(item.date.getFullYear().toString());
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card>
        <FilteredExpense
          selected={filteredYear}
          onFilterYear={filterChangeHandler}
        />
        <ExpenseList item={filterExpense} />
      </Card>
    </>
  );
};

export default Expenses;
