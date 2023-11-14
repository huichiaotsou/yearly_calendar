import WeekdaysList from "./dates_checkbox";
import { useState } from "react";

export default function DateDialog({ dialogRef, close }) {
  const [checkedWeekdays, setCheckedWeekdays] = useState([]);

  return (
    <div>
      <dialog className="dialogs notification" ref={dialogRef}>
        <button
          className="delete"
          onClick={() => {
            close();
            setCheckedWeekdays([]);
          }}
        ></button>
        <form
          method="dialog"
          className="box"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="field">
            <WeekdaysList
              currYear={2023}
              weekdayPicked={0}
              checkedWeekdays={checkedWeekdays}
              setCheckedWeekdays={setCheckedWeekdays}
            />
          </div>

          <button
            className="button is-primary"
            onClick={() => {
              close();
              setCheckedWeekdays([]);
            }}
          >
            Submit
          </button>
        </form>
      </dialog>
    </div>
  );
}
