import { useContext } from "react";
import DialogContext from "../contexts/dialog";
import CalPlanningContext from "../contexts/cal_planning";
import EventTypesContext from "../contexts/event_types";

function useDialogContext() {
  return useContext(DialogContext);
}

function useCalPlanningContext() {
  return useContext(CalPlanningContext);
}

function useEventTypesContext() {
  return useContext(EventTypesContext);
}

export { useDialogContext, useCalPlanningContext, useEventTypesContext };
