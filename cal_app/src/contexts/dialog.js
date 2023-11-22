import { createContext } from "react";
import { useState } from "react";
// import axios from "axios";
// import config from "../config.json";

const DialogContext = createContext();

function getTodayDateString() {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
}
const todayDateString = getTodayDateString();

function DialogProvider({ children }) {
  // Event details
  const [isRecurring, setIsRecurring] = useState(false);

  // if isRecurring is true, omit dateStart/dateEnd
  // if not, it's the recurringDay that counts and there will be several dates
  const [dateStart, setDateStart] = useState(todayDateString);
  const [dateEnd, setDateEnd] = useState(todayDateString);
  const [recurringDay, setRecurringDay] = useState("");

  // Event start hour and end hour
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // Checked States
  const [checkedDays, setCheckedDays] = useState([]);
  const [checkedEvent, setCheckedEvent] = useState("");
  const [checkedLocations, setCheckedLocations] = useState([]);
  const [checkedVenues, setCheckedVenues] = useState([]);

  function resetAllFields() {
    setIsRecurring(false);
    setCheckedEvent("");
    setCheckedLocations([]);
    setCheckedVenues([]);
    setRecurringDay("");
    setDateStart(todayDateString);
    setDateEnd(todayDateString);
    setCheckedDays([]);
    setStartTime("");
    setEndTime("");
  }

  const dialogContexts = {
    // events
    checkedEvent,
    setCheckedEvent,
    isRecurring,
    setIsRecurring,

    //  checkedlocations
    checkedLocations,
    setCheckedLocations,

    // checked venues
    checkedVenues,
    setCheckedVenues,

    // date & time
    recurringDay,
    dateStart,
    setDateStart,
    dateEnd,
    setDateEnd,
    checkedDays,
    setCheckedDays,
    setRecurringDay,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    todayDateString,

    // functions - reset
    resetAllFields,
  };

  return (
    <DialogContext.Provider value={dialogContexts}>
      {children}
    </DialogContext.Provider>
  );
}

export { DialogProvider };
export default DialogContext;
