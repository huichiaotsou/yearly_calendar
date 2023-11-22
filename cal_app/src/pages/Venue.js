import "../styles/venue.css";
import { useState, useEffect } from "react";
import { useAppContext } from "../hooks/use_contexts";
import NavBar from "../components/venues/nav_bar";
import VenueList from "../components/venues/venue_list";

function Venue() {
  const { fetchVenues } = useAppContext();
  const [checkedLocation, setCheckedLocation] = useState("All");

  useEffect(() => {
    fetchVenues();
  }, []);

  return (
    <>
      {" "}
      <NavBar
        checkedLocation={checkedLocation}
        setCheckedLocation={setCheckedLocation}
      />
      <VenueList loc={checkedLocation} />
    </>
  );
}

export default Venue;
