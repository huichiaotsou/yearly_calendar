import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import config from "../config.json";

const VenueContext = createContext();

function VenueProvider({ children }) {
  const [venues, setVenues] = useState();

  const venueContexts = {};

  return (
    <VenueContext.Provider value={venueContexts}>
      {children}
    </VenueContext.Provider>
  );
}

export { VenueProvider };
export default VenueContext;
