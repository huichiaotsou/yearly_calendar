import { useContext } from "react";
import DialogContext from "../contexts/dialog";

export default function useDialogContext() {
  return useContext(DialogContext);
}
