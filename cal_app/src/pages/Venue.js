import "../styles/venue.css";

import Venues from "../components/venues";
import { VenueProvider } from "../contexts/venue";

function Venue() {
  return (
    <VenueProvider>
      <Venues />
    </VenueProvider>
  );
}

export default Venue;
