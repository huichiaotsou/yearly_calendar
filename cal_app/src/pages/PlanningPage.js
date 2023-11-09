import "../styles/calendar.css";
import { PlanningProvider } from "../contexts/planning";
import Year from "../components/calendar";

function Diary() {
  return (
    <PlanningProvider>
      <div id="year-container">
        <Year />
      </div>
    </PlanningProvider>
  );
}

export default Diary;
