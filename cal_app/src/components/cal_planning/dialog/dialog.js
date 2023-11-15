import { DialogProvider } from "../../../contexts/dialog";
import { useDialog } from "../../../hooks/use_dialog_ref";

import EventDialog from "./dialog_event";
import DateDialog from "./dialog_dates";

const ScheduleDialog = ({ currYear }) => {
  const dateDialog = useDialog();
  const eventDialog = useDialog();

  return (
    <DialogProvider>
      <DateDialog dialogRef={dateDialog.ref} close={dateDialog.close} />
      <EventDialog
        dialogRef={eventDialog.ref}
        close={eventDialog.close}
        openDateDialog={dateDialog.open}
      />
      <button
        className="open_dialog_buttons button is-primary is-normal"
        onClick={eventDialog.open}
      >
        Schedule Events
      </button>
    </DialogProvider>
  );
};

export default ScheduleDialog;
