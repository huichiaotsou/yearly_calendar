import { createContext } from "react";

const CalPlanningContext = createContext();

function CalPlanningProvider({ children }) {
  const valuesToShare = {};
  return (
    <CalPlanningContext.Provider value={valuesToShare}>
      {children}
    </CalPlanningContext.Provider>
  );
}

export { CalPlanningProvider };
export default CalPlanningContext;
