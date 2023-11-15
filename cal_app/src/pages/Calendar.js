import "../styles/calendar.css";
import { PlanningProvider } from "../contexts/planning";
import { useState } from "react";
import Year from "../components/cal_planning/calendar";
import YearSelect from "../components/cal_planning/year_select";
import ScheduleDialog from "../components/cal_planning/dialog/dialog";

function Calendar() {
  const thisYear = new Date().getFullYear();
  const [year, setYear] = useState(thisYear);

  const handleChange = async (year) => {
    setYear(year);
  };

  return (
    <PlanningProvider>
      <div id="controller_container">
        <ScheduleDialog currYear={year} />
        <YearSelect currYear={year} onChange={handleChange} />
      </div>

      <div id="calendar-container">
        <Year currYear={year} />
      </div>
    </PlanningProvider>
  );
}

export default Calendar;