import { useRef } from "react";
import Button from "../ui/button";
import classes from "./events-search.module.css";

export default function EventsSearch({ onSearch }) {
  const { form, controls, control } = classes;
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function onSubmitHandler(event) {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    onSearch(selectedYear, selectedMonth);
  }

  return (
    <form className={form} onSubmit={onSubmitHandler}>
      <div className={controls}>
        <div className={control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            {[2021, 2022].map((option) => (
              <option key={option} value={option.toString()}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className={control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ].map((month, index) => (
              <option key={index} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}
