import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import config from "../config.json";
import venuesJson from "./temp_venues.json";
import locationsJson from "./temp_locations.json";
import eventsJson from "./temp_events.json";

const AppContext = createContext();

function AppProvider({ children }) {
  const thisYear = new Date().getFullYear();
  const [year, setYear] = useState(thisYear);

  const [locations, setLocations] = useState([]);
  const [venues, setVenues] = useState([]);
  const [events, setEvents] = useState({});

  const fetchLocations = async () => {
    // const res = await axios.get(`http://${config.domain}:${config.backendPort}/locations`);
    setLocations(locationsJson.locations);
  };

  const fetchVenues = async (locations) => {
    const venues = [];
    // const res = await axios.get(`http://${config.domain}:${config.backendPort}/venues`);
    locations.map((loc) => {
      venues.push(
        ...venuesJson.venues[loc].map((v) => {
          return `${v}-${loc}`;
        })
      );
    });

    setVenues(venues);
  };

  const fetchEvents = async () => {
    // const res = await axios.get(`http://${config.domain}:${config.backendPort}/eventtypes`);
    setEvents(eventsJson.events);
  };

  const appContexts = {
    // Year
    year,
    setYear,

    // Locations
    locations,
    setLocations,
    fetchLocations,

    // Venues
    venues,
    setVenues,
    fetchVenues,

    // Events
    events,
    setEvents,
    fetchEvents,
  };

  return (
    <AppContext.Provider value={appContexts}>{children}</AppContext.Provider>
  );
}

export { AppProvider };
export default AppContext;
