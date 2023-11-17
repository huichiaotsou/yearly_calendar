import "../styles/calendar.css";
import { CalPlanningProvider } from "../contexts/cal_planning";
import Year from "../components/calendar";
import YearSelect from "../components/year_select";
import ScheduleDialog from "../components/schedule_dialog/main";

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
