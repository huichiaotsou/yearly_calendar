import { createContext } from "react";

const PlanningContext = createContext();

function PlanningProvider({ children }) {
  const valuesToShare = {};
  return (
    <PlanningContext.Provider value={valuesToShare}>
      {children}
    </PlanningContext.Provider>
  );
}

export { PlanningProvider };
export default PlanningContext;
