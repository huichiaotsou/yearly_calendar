import React, { useState } from "react";

export default function EventDialog({ dialogRef, close, openDateDialog }) {
  const [event, setEvent] = useState("");
  const [venue, setVenue] = useState("");
  const [recurringDay, setRecurringDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  function isFormValid() {
    return (
      event !== "" &&
      venue !== "" &&
      recurringDay !== "" &&
      startTime !== "" &&
      endTime !== ""
    );
  }

  function resetAllFields() {
    setEvent("");
    setVenue("");
    setRecurringDay("");
    setStartTime("");
    setEndTime("");
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
          <div className="field">
            <label className="label">Event</label>
            <select
              className="control schedule_selects"
              onChange={(e) => setEvent(e.target.value)}
              value={event}
            >
              <option></option>
              <option>Baptism</option>
              <option>yth Night</option>
              <option>Hope Experience</option>
            </select>
          </div>
          <div className="field">
            <label className="label">Venue</label>
            <select
              className="control schedule_selects"
              onChange={(e) => setVenue(e.target.value)}
              value={venue}
            >
              <option></option>
              <option>Main Hall</option>
              <option>Gather</option>
              <option>Kids Central</option>
            </select>
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
