import { useEffect } from "react";
import { useDialogContext } from "../../hooks/use_contexts";
import { useAppContext } from "../../hooks/use_contexts";

const Venue = ({ loc, venue, handleCheckboxChange }) => {
  const { checkedVenues } = useDialogContext();

  return (
    <div className="">
      <input
        id={venue}
        className=""
        type="checkbox"
        checked={checkedVenues.includes(venue)}
        onChange={() => handleCheckboxChange(venue)}
      />
      <label htmlFor={venue} className="">
        {venue}
      </label>
    </div>
  );
};

const VenueList = () => {
  const { checkedLocations, checkedVenues, setCheckedVenues } =
    useDialogContext();
  const { venues, fetchVenues } = useAppContext();

  useEffect(() => {
    fetchVenues();
  }, []);

  const handleCheckboxChange = (venue) => {
    const updatedVenues = checkedVenues.includes(venue)
      ? checkedVenues.filter((d) => d !== venue)
      : [...checkedVenues, venue];
    setCheckedVenues(updatedVenues);
  };

  const venueList = checkedLocations.map((loc) =>
    venues[loc].map((venue) => (
      <Venue
        key={`${loc}-${venue}`}
        loc={loc}
        venue={`${loc}: ${venue}`}
        handleCheckboxChange={handleCheckboxChange}
      />
    ))
  );

  return <>{venueList}</>;
};

export default VenueList;
