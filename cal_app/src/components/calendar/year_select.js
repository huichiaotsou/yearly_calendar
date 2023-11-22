import { useAppContext } from "../../hooks/use_contexts";

function YearSelect() {
  const { year, setYear } = useAppContext();

  const handleLastYear = async (e) => {
    await setYear(year - 1);
  };

  const handleNextYear = async (e) => {
    await setYear(year + 1);
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
        {year}
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
