import { useContext } from "react";
import DialogContext from "../contexts/dialog";
import AppContext from "../contexts/app";

function useDialogContext() {
  return useContext(DialogContext);
}

function useAppContext() {
  return useContext(AppContext);
}

export { useDialogContext, useAppContext };
