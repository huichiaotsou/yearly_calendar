import { DialogProvider } from "../../contexts/dialog";
import { useDialog } from "../../hooks/use_dialog_ref";

import EventLocationDialog from "./dialog_event_location";
import EventTimeDialog from "./dialog_event_time";

const ScheduleDialog = () => {
  const eventTimeDialog = useDialog();
  const eventLocationDialog = useDialog();

  return (
    <DialogProvider>
      <button
        className="open_dialog_buttons button is-primary is-normal"
        onClick={eventLocationDialog.open}
      >
        Schedule Events
      </button>

      <EventLocationDialog
        dialogRef={eventLocationDialog.ref}
        close={eventLocationDialog.close}
        openDateDialog={eventTimeDialog.open}
      />
      <EventTimeDialog
        dialogRef={eventTimeDialog.ref}
        close={eventTimeDialog.close}
      />
    </DialogProvider>
  );
};

export default ScheduleDialog;
