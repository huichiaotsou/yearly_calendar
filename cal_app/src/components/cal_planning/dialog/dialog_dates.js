import WeekdaysList from "./dates_checkbox";
import useDialogContext from "../../../hooks/use_dialog_context";

export default function DateDialog({ dialogRef, close }) {
  const { setCheckedDays } = useDialogContext();

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
          <div className="field">
            <WeekdaysList />
          </div>

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
