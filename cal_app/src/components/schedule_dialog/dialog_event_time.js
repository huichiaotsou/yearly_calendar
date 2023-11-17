import WeekdaysList from "./dates_checkbox";
import { useDialogContext } from "../../hooks/use_contexts";
import { useState } from "react";

export default function EventTimeDialog({ dialogRef, close }) {
  const {
    checkedEvent,
    singleDate,
    setSingleDate,
    setCheckedDays,
    recurringDay,
    setRecurringDay,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
  } = useDialogContext();

  const [isRecurring, setIsRecurring] = useState(false);

  let datePick = "";
  if (!isRecurring) {
    datePick = (
      <div className="field">
        <label className="label">Date</label>
        <input
          className="control"
          type="date"
          value={singleDate}
          id="event_date"
          onChange={(e) => {
            setSingleDate(e.target.value);
          }}
        />
      </div>
    );
  }

  let recurringDays = "";
  if (isRecurring) {
    recurringDays = (
      <div className="field">
        <label className="label">Recurring On</label>
        <select
          className="control schedule_selects"
          onChange={(e) => {
            setRecurringDay(e.target.value);
            setCheckedDays([]);
          }}
          value={recurringDay}
        >
          <option></option>
          <option value={0}>Sunday</option>
          <option value={1}>Monday</option>
          <option value={2}>Tuesday</option>
          <option value={3}>Wednesday</option>
          <option value={4}>Thursday</option>
          <option value={5}>Friday</option>
          <option value={6}>Saturday</option>
        </select>
      </div>
    );
  }

  let dayList = "";
  if (isRecurring && recurringDay !== "") {
    dayList = (
      <div className="field">
        <WeekdaysList />
      </div>
    );
  }

  return (
    <div>
      <dialog className="dialogs notification" ref={dialogRef}>
        <button
          className="delete"
          onClick={() => {
            close();
            setCheckedDays([]);
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
          <div className="dialog_titles">Schedule Time: {checkedEvent}</div>

          <div className="field">
            <input
              className="control"
              type="checkbox"
              checked={isRecurring}
              id="is_recurring"
              onChange={(e) => {
                setIsRecurring(!isRecurring);
                if (!isRecurring) {
                  setRecurringDay("");
                }
              }}
            />
            <label htmlFor="is_recurring" className="">
              {" This is a recurring event"}
            </label>
          </div>

          {datePick}

          <div id="time_container" className="field">
            <div className="field time_select">
              <label className="label">Event Starts</label>
              <div className="control">
                <input
                  className="input"
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
            </div>
            <div className="field time_select">
              <label className="label">Event Ends</label>
              <div className="control">
                <input
                  className="input"
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>
          </div>

          {recurringDays}

          {dayList}

          <button
            className="button is-primary"
            onClick={() => {
              close();
              setCheckedDays([]);
            }}
          >
            Submit
          </button>
        </form>
      </dialog>
    </div>
  );
}
