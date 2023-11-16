import { useEffect } from "react";
import { useDialogContext } from "../../../hooks/use_contexts";
import { useEventTypesContext } from "../../../hooks/use_contexts";
import VenueList from "./venue_list";

export default function EventDialog({ dialogRef, close, openDateDialog }) {
  const {
    event,
    setEvent,
    checkedVenues,
    recurringDay,
    setRecurringDay,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    resetEventDetailFields,
  } = useDialogContext();
  const { eventTypes, fetchEventTypes } = useEventTypesContext();

  useEffect(() => {
    fetchEventTypes();
  }, []);

  function isFormValid() {
    return (
      event !== "" &&
      checkedVenues.length === 0 &&
      recurringDay !== "" &&
      startTime !== "" &&
      endTime !== ""
    );
  }

  return (
    <div>
      <dialog className="dialogs notification" ref={dialogRef}>
        <button
          className="delete"
          onClick={() => {
            close();
            resetEventDetailFields();
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
            <label className="label">Event</label>
            <select
              className="control schedule_selects"
              onChange={(e) => setEvent(e.target.value)}
              value={event}
            >
              <option></option>
              {eventTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label className="label">Locations</label>
            <VenueList />
          </div>
          <div className="field">
            <label className="label">Venues</label>
            <VenueList />
          </div>
          <div className="field">
            <label className="label">Recurring Day</label>
            <select
              className="control schedule_selects"
              onChange={(e) => setRecurringDay(e.target.value)}
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
          <div id="time_container">
            <div className="field time_select">
              <label className="label">Start</label>
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
              <label className="label">End</label>
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

          <button
            className="button is-primary"
            onClick={() => {
              close();
              openDateDialog();
            }}
            // disabled={!isFormValid()}
          >
            Next
          </button>
        </form>
      </dialog>
    </div>
  );
}
