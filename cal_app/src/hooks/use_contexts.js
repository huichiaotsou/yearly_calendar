import { useContext } from "react";
import DialogContext from "../contexts/dialog";
import CalPlanningContext from "../contexts/cal_planning";
import AppContext from "../contexts/app";

function useDialogContext() {
  return useContext(DialogContext);
}

function useCalPlanningContext() {
  return useContext(CalPlanningContext);
}

function useAppContext() {
  return useContext(AppContext);
}

export { useDialogContext, useCalPlanningContext, useAppContext };
