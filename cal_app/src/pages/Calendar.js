import "../styles/calendar.css";
import { CalPlanningProvider } from "../contexts/cal_planning";
import Year from "../components/cal_planning/calendar";
import YearSelect from "../components/cal_planning/year_select";
import ScheduleDialog from "../components/cal_planning/dialog/dialog";

function Calendar() {
  return (
    <CalPlanningProvider>
      <div id="controller_container">
        <ScheduleDialog />
        <YearSelect />
      </div>

      <div id="calendar-container">
        <Year />
      </div>
    </CalPlanningProvider>
  );
}

export default Calendar;
