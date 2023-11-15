import { useContext } from "react";
import CalPlanningContext from "../contexts/cal_planning";

export default function useCalPlanningContext() {
  return useContext(CalPlanningContext);
}
