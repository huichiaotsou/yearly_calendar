function YearSelect({ currYear, onChange }) {
  const handleLastYear = async (e) => {
    await onChange(currYear - 1);
  };

  const handleNextYear = async (e) => {
    await onChange(currYear + 1);
  };

  return (
    <div id="year_select_container">
      <button
        className="button is-primary is-normal is-light year_select_element"
        onClick={handleLastYear}
      >
        Previous
      </button>
      <div id="current_year" className="year_select_element">
        {currYear}
      </div>
      <button
        className="button is-primary is-normal is-light year_select_element"
        onClick={handleNextYear}
      >
        Next
      </button>
    </div>
  );
}

export default YearSelect;
