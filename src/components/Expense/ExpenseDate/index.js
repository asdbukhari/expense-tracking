import "./expenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  const day = props.date.toLocaleDateString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expenseDateBox">
      <div className="expenseDateBox__month">{month}</div>
      <div className="expenseDateBox__day">{day}</div>
      <div className="expenseDateBox__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
