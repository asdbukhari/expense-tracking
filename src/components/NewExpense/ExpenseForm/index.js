import styles from "./expense_form.module.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const inputNameHandler = (e) => {
    setName(e.target.value);
  };

  const inputPriceHandler = (e) => {
    setPrice(e.target.value);
  };

  const inputDateHandler = (e) => {
    setDate(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const expenseDate = {
      name,
      price,
      date,
    };
    props.onGenerateData(expenseDate);

    setName("");
    setPrice("");
    setDate("");
  };

  return (
    <>
      <form onSubmit={formSubmitHandler} className={styles.expense_form}>
        <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            maxLength="10"
            value={name}
            onChange={inputNameHandler}
          />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="number"
            min="10"
            step="1"
            value={price}
            onChange={inputPriceHandler}
          />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            type="date"
            min="2021-08-01"
            max="2021-12-30"
            value={date}
            onChange={inputDateHandler}
          />
        </div>

        <div className={styles.form_control_button}>
          <input type="submit" value="SAVE EXPENSE" />
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
