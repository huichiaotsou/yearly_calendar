import { createContext } from "react";
import { useState } from "react";
// import axios from "axios";
// import config from "../config.json";
import venuesJson from "./temp_venues.json";
import locationsJson from "./temp_locations.json";
import eventsJson from "./temp_events.json";
import eventTypesJson from "./temp_event_types.json";

const AppContext = createContext();

function AppProvider({ children }) {
  const thisYear = new Date().getFullYear();
  const [year, setYear] = useState(thisYear);

  const [locations, setLocations] = useState([]);
  const [venues, setVenues] = useState({});
  const [events, setEvents] = useState({});
  const [eventTypes, setEventTypes] = useState([]);

  const fetchLocations = async () => {
    // const res = await axios.get(`http://${config.domain}:${config.backendPort}/locations`);
    setLocations(locationsJson.locations);
  };

  const fetchVenues = async () => {
    // const res = await axios.get(`http://${config.domain}:${config.backendPort}/venues`);
    setVenues(venuesJson.venues);
  };

  const fetchEvents = async () => {
    console.log("fetchEvents: ", eventsJson.events);
    // const res = await axios.get(`http://${config.domain}:${config.backendPort}/events`);
    setEvents(eventsJson.events);
  };

  const fetchEventTypes = async () => {
    console.log("fetchEventTypes: ", eventTypesJson.eventTypes);
    // const res = await axios.get(`http://${config.domain}:${config.backendPort}/events`);
    setEventTypes(eventTypesJson.eventTypes);
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

    // Event types
    eventTypes,
    setEventTypes,
    fetchEventTypes,
  };

  return (
    <AppContext.Provider value={appContexts}>{children}</AppContext.Provider>
  );
}

export { AppProvider };
export default AppContext;
