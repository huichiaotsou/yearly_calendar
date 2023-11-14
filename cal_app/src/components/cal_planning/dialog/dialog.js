import { useDialog } from "../../..//hooks/useDialogRef";
import EventDialog from "./dialog_event";
import DateDialog from "./dialog_dates";

const ScheduleDialog = ({ currYear }) => {
  const dateDialog = useDialog();
  const eventDialog = useDialog();

  return (
    <>
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
    </>
  );
};

export default ScheduleDialog;
