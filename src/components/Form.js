import React, { useState } from "react";

const defaultTip = "Select a number to show only Beasts with that number of horns.";

function Form({ hornsFilter, setHornsFilter }) {
  const [tip, setTip] = useState(defaultTip);

  const handleFilter = ({ target: { value } }) => {
    setHornsFilter(value);
    setTip(value === "" ? defaultTip : `${value}:`);
  };

  return (
    <form className="Form">
      <label htmlFor="number-select">Filter by horns:</label>
      <select id="number-select" value={hornsFilter} onChange={handleFilter}>
        <option value="">Select number</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <p>{tip}</p>
    </form>
  );
}

export default Form;
