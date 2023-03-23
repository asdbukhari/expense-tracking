import React from "react";
import styles from "./filteredExpense.module.css";

const FilteredExpense = props => {
  const onSelectFilter = selectedOption => {
    props.onFilterYear(selectedOption.target.value);
  };

  return (
    <div className={styles.filter_expense}>
      <div className={styles.filter_expense_text}>Filter by date</div>

      <form className={styles.filter_expense_form}>
        <div className={styles.filter_expense_form_control}>
          <label htmlFor="years" className={styles.filter_expense_form_label}>
            Choose a year:
          </label>

          <select
            name="year"
            id="year"
            className={styles.filter_expense_option}
            value={props.selected}
            onChange={onSelectFilter}>
            <option className={styles.filter_expense_item} value="2023">
              2023
            </option>
            <option className={styles.filter_expense_item} value="2022">
              2022
            </option>
            <option className={styles.filter_expense_item} value="2021">
              2021
            </option>
            <option className={styles.filter_expense_item} value="2020">
              2020
            </option>
            <option className={styles.filter_expense_item} value="2019">
              2019
            </option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default FilteredExpense;
