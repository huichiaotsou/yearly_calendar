import { createContext } from "react";

const DialogContext = createContext();

function DialogProvider({ children }) {
  const valuesToShare = {};
  return (
    <DialogContext.Provider value={valuesToShare}>
      {children}
    </DialogContext.Provider>
  );
}

export { DialogProvider };
export default DialogContext;
