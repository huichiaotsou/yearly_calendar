import { DialogProvider } from "../../../contexts/dialog";
import { useDialog } from "../../../hooks/use_dialog_ref";

import EventDialog from "./dialog_event";
import DateDialog from "./dialog_dates";

const ScheduleDialog = () => {
  const dateDialog = useDialog();
  const eventDialog = useDialog();

  return (
    <DialogProvider>
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
      <DateDialog dialogRef={dateDialog.ref} close={dateDialog.close} />
    </DialogProvider>
  );
};

export default ScheduleDialog;
