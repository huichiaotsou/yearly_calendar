import { useContext } from "react";
import DialogContext from "../contexts/dialog";
import CalPlanningContext from "../contexts/cal_planning";

function useDialogContext() {
  return useContext(DialogContext);
}

function useCalPlanningContext() {
  return useContext(CalPlanningContext);
}

export { useDialogContext, useCalPlanningContext };
