import { useEffect } from "react";
import { useDialogContext, useAppContext } from "../../hooks/use_contexts";
import VenueList from "./venue_list";
import LocationList from "./location_list";
import EventSelect from "./dialog_event_select";

export default function EventLocationDialog({
  dialogRef,
  close,
  openDateDialog,
}) {
  const { checkedEvent, resetAllFields } = useDialogContext();
  const { events, fetchEvents } = useAppContext();

  useEffect(() => {
    fetchEvents();
  }, [events]);

  function isFormValid() {
    return checkedEvent !== "";
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
            {/* <select
              className="control schedule_selects"
              onChange={(e) => setCheckedEvent(e.target.value)}
              value={checkedEvent}
            >
              <option></option>
              {events.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select> */}
            <EventSelect />
          </div>
          <div className="field">
            <label className="label">Locations</label>
            <LocationList />
          </div>
          <div className="field">
            <label className="label">Venues</label>
            <VenueList />
          </div>

          <button
            className="button is-primary"
            onClick={() => {
              close();
              openDateDialog();
            }}
            disabled={!isFormValid()}
          >
            Next
          </button>
        </form>
      </dialog>
    </div>
  );
}
