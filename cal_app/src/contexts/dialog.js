import { createContext } from "react";
import { useState } from "react";

const DialogContext = createContext();

function DialogProvider({ children }) {
  // Event details
  const [event, setEvent] = useState("");

  const [locations, setLocations] = useState([]);
  const [venues, setVenues] = useState([]);

  const [recurringDay, setRecurringDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // Checked States
  const [checkedDays, setCheckedDays] = useState([]);
  const [checkedLocations, setCheckedLocations] = useState([]);
  const [checkedVenues, setCheckedVenues] = useState([]);

  const fetchVenues = async (locations) => {
    // const res = await axios.get(
    //   `http://${config.domain}:${config.backendPort}/venues/locations=_&_`
    // );
    setVenues([
      "Main Hall(TPE)",
      "Gather(TPE)",
      "Main Hall(TC)",
      "Room 103(TC)",
    ]);
  };

  const fetchLocations = async () => {
    // const res = await axios.get(
    //   `http://${config.domain}:${config.backendPort}/venues/locations=_&_`
    // );
    setLocations(["Taipei", "Taichung"]);
  };

  function resetEventDetailFields() {
    setEvent("");
    setCheckedLocations([]);
    setCheckedVenues([]);
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
    locations,
    setLocations,
    checkedLocations,
    setCheckedLocations,
    fetchLocations,
    venues,
    setVenues,
    checkedVenues,
    setCheckedVenues,
    fetchVenues,
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
