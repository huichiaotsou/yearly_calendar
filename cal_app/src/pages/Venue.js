import "../styles/venue.css";
import { useState, useEffect } from "react";
import { useAppContext } from "../hooks/use_contexts";
import NavBar from "../components/venues/nav_bar";
import VenueList from "../components/venues/venue_list";

function Venue() {
  const { fetchLocations, fetchVenues } = useAppContext();
  const [checkedLocation, setCheckedLocation] = useState("All");

  useEffect(() => {
    fetchLocations();
    fetchVenues();
  }, []);

  return (
    <>
      <NavBar
        checkedLocation={checkedLocation}
        setCheckedLocation={setCheckedLocation}
      />
      <div className="venue_list_container">
        <VenueList loc={checkedLocation} />
      </div>
    </>
  );
}

export default Venue;
