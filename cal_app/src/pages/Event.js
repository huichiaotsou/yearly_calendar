import "../styles/venue.css";
import { useState, useEffect } from "react";
import { useAppContext } from "../hooks/use_contexts";
import NavBar from "../components/events/nav_bar";
// import VenueList from "../components/venues/venue_list";

function Event() {
  const { fetchEventTypes } = useAppContext();
  const [checkedEventType, setCheckedEventType] = useState("All");

  useEffect(() => {
    fetchEventTypes();
  }, []);

  return (
    <>
      <NavBar
        checkedEventType={checkedEventType}
        setCheckedEventType={setCheckedEventType}
      />
      {/* <div className="venue_list_container">
        <VenueList loc={checkedLocation} />
      </div> */}
    </>
  );
}

export default Event;
