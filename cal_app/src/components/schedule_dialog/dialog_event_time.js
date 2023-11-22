import WeekdaysList from "./dates_checkbox";
import { useDialogContext } from "../../hooks/use_contexts";

export default function EventTimeDialog({ dialogRef, close }) {
  const {
    checkedEvent,
    isRecurring,
    setIsRecurring,
    dateStart,
    setDateStart,
    dateEnd,
    setDateEnd,
    recurringDay,
    setRecurringDay,
    todayDateString,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    resetAllFields,
  } = useDialogContext();

  let datePick = "";
  if (!isRecurring) {
    datePick = (
      <div className="horizontal_container">
        <div className="field">
          <label htmlFor="event_date_start" className="label">
            Date Start
          </label>
          <input
            className="input date_time_input"
            type="date"
            value={dateStart}
            id="event_date_start"
            onChange={(e) => {
              setDateStart(e.target.value);
              setDateEnd(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label htmlFor="event_date_start" className="label">
            Date End
          </label>
          <input
            className="input date_time_input"
            type="date"
            value={dateEnd}
            min={dateStart}
            id="event_date_start"
            onChange={(e) => {
              setDateEnd(e.target.value);
            }}
          />
        </div>
      </div>
    );
  }

  let timePick = (
    <div className="horizontal_container field">
      <div className="field time_select">
        <label className="label">Time Start</label>
        <div className="control">
          <input
            className="input date_time_input"
            type="time"
            value={startTime}
            onChange={(e) => {
              setStartTime(e.target.value);
              setEndTime(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="field time_select">
        <label className="label">Time End</label>
        <div className="control">
          <input
            className="input date_time_input"
            type="time"
            min={startTime}
            value={endTime}
            onChange={(e) => {
              setEndTime(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );

  let recurringDays = "";
  if (isRecurring) {
    recurringDays = (
      <div className="field">
        <label className="label">Recurring On</label>
        <select
          className="control schedule_selects"
          onChange={(e) => {
            setRecurringDay(e.target.value);
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
            resetAllFields();
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
          <div className="dialog_titles">Schedule Time for {checkedEvent}</div>

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
                if (isRecurring) {
                  setDateStart(todayDateString);
                  setDateEnd(todayDateString);
                }
              }}
            />
            <label htmlFor="is_recurring" className="">
              {" This is a recurring event"}
            </label>
          </div>

          {datePick}

          {timePick}

          {recurringDays}

          {dayList}

          <button
            className="button is-primary"
            onClick={(e) => {
              close();
              resetAllFields();
            }}
          >
            Submit
          </button>
        </form>
      </dialog>
    </div>
  );
}
