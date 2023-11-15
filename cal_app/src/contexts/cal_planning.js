import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import config from "../config.json";

const CalPlanningContext = createContext();

function CalPlanningProvider({ children }) {
  const thisYear = new Date().getFullYear();
  const [year, setYear] = useState(thisYear);

  const getEventsInYear = async () => {
    const res = await axios.get(
      `http://${config.domain}:${config.backendPort}/events/${year}`
    );
    return res.data;
  };

  const calPlanningContexts = { year, setYear, getEventsInYear };
  return (
    <CalPlanningContext.Provider value={calPlanningContexts}>
      {children}
    </CalPlanningContext.Provider>
  );
}

export { CalPlanningProvider };
export default CalPlanningContext;
