import { useEffect } from "react";
import { useDialogContext } from "../../hooks/use_contexts";
import { useAppContext } from "../../hooks/use_contexts";

const Venue = ({ venue, handleCheckboxChange }) => {
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
      <label htmlFor={venue} className="">{`${venue}`}</label>
    </div>
  );
};

const VenueList = () => {
  const { checkedVenues, setCheckedVenues, checkedLocations } =
    useDialogContext();

  const { venues, fetchVenues } = useAppContext();

  useEffect(() => {
    fetchVenues(checkedLocations);
  }, [checkedLocations]);

  const handleCheckboxChange = (venue) => {
    const updatedVenues = checkedVenues.includes(venue)
      ? checkedVenues.filter((d) => d !== venue)
      : [...checkedVenues, venue];
    setCheckedVenues(updatedVenues);
  };

  return (
    <>
      {venues.map((venue) => (
        <Venue
          key={venue}
          venue={venue}
          handleCheckboxChange={handleCheckboxChange}
        />
      ))}
    </>
  );
};

export default VenueList;
