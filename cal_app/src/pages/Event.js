import "../styles/venue.css";
import { useState, useEffect } from "react";
import { useAppContext } from "../hooks/use_contexts";
import NavBar from "../components/events/nav_bar";
import EventList from "../components/events/event_list";

function Event() {
  const { fetchEvents, fetchEventTypes } = useAppContext();
  const [checkedEventType, setCheckedEventType] = useState("All");

  useEffect(() => {
    fetchEvents();
    fetchEventTypes();
  }, []);

  return (
    <>
      <NavBar
        checkedEventType={checkedEventType}
        setCheckedEventType={setCheckedEventType}
      />
      <div className="event_list_container">
        <EventList eventType={checkedEventType} />
      </div>
    </>
  );
}

export default Event;
