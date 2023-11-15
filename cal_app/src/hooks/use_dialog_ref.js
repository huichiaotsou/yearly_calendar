import { useRef } from "react";

function useDialog() {
  const dialogRef = useRef(null);
  const openDialog = () => {
    dialogRef.current.showModal();
  };
  const closeDialog = () => {
    dialogRef.current.close();
  };

  return {
    ref: dialogRef,
    open: openDialog,
    close: closeDialog,
  };
}

export { useDialog };
