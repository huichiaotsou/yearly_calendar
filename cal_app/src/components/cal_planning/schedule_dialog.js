import { useRef } from "react";

const ScheduleEventsDialog = ({ currYear }) => {
  const dialogRef = useRef(null);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  const handleBackdropClick = (e) => {
    // Check if the click occurred outside the dialog
    if (e.target === dialogRef.current) {
      closeDialog();
    }
  };

  return (
    <>
      <div>
        <dialog
          id="schedule_events_dialog"
          className="dialogs box"
          ref={dialogRef}
          onClick={handleBackdropClick}
        >
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
              {/* TODO: Events are read from API, auto-fill in the following fields */}
              <label className="label">Event</label>
              <select className="control schedule_selects">
                <option>Baptism</option>
                <option>yth Night</option>
                <option>Hope Experience</option>
              </select>
            </div>
            <div className="field">
              <label className="label">Venue</label>
              <select className="control schedule_selects">
                <option>Main Hall</option>
                <option>Gather</option>
                <option>Kids Central</option>
              </select>
            </div>
            <div className="field">
              <label className="label">Recurring Day</label>
              <select className="control schedule_selects">
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
              </select>
            </div>
            <div id="time_container">
              <div className="field time_select">
                <label className="label">Start</label>
                <div className="control">
                  <input className="input" type="time" />
                </div>
              </div>
              <div className="field time_select">
                <label className="label">End</label>
                <div className="control">
                  <input className="input" type="time" />
                </div>
              </div>
            </div>

            <button className="button is-primary" onClick={closeDialog}>
              Next
            </button>
          </form>
        </dialog>
      </div>
      <button
        id="button_open_schedule_events_dialog"
        className="open_dialog_buttons button is-primary is-normal"
        onClick={openDialog}
      >
        Schedule Events
      </button>
    </>
  );
};

export default ScheduleEventsDialog;
