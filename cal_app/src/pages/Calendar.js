import "../styles/calendar.css";
import Year from "../components/calendar/calendar";
import YearSelect from "../components/calendar/year_select";
import ScheduleDialog from "../components/schedule_dialog/main";

function Calendar() {
  return (
    <>
      <div id="controller_container">
        <ScheduleDialog />
        <YearSelect />
      </div>

      <div id="calendar-container">
        <Year />
      </div>
    </>
  );
}

export default Calendar;
