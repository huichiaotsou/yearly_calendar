import { createContext } from "react";
import { useState } from "react";

const DialogContext = createContext();

function DialogProvider({ children }) {
  // Event details
  const [event, setEvent] = useState("");
  const [venue, setVenue] = useState("");
  const [recurringDay, setRecurringDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // Checked days
  const [checkedDays, setCheckedDays] = useState([]);

  function resetEventDetailFields() {
    setEvent("");
    setVenue("");
    setRecurringDay("");
    setStartTime("");
    setEndTime("");
  }

  function resetCheckedDays() {
    setCheckedDays([]);
  }

  const dialogContexts = {
    event,
    setEvent,
    venue,
    setVenue,
    recurringDay,
    setRecurringDay,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    checkedDays,
    setCheckedDays,
    resetEventDetailFields,
    resetCheckedDays,
  };

  return (
    <DialogContext.Provider value={dialogContexts}>
      {children}
    </DialogContext.Provider>
  );
}

export { DialogProvider };
export default DialogContext;
