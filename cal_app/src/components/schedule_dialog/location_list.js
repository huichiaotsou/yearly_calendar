import { useEffect } from "react";
import { useAppContext, useDialogContext } from "../../hooks/use_contexts";

const Location = ({ location, handleCheckboxChange }) => {
  const { checkedLocations } = useDialogContext();

  return (
    <div className="">
      <input
        className=""
        type="checkbox"
        id={location}
        checked={checkedLocations.includes(location)}
        onChange={() => handleCheckboxChange(location)}
      />
      <label htmlFor={location} className="">{`${location}`}</label>
    </div>
  );
};

const LocationList = () => {
  const { locations, fetchLocations } = useAppContext();
  const {
    checkedLocations,
    setCheckedLocations,
    checkedVenues,
    setCheckedVenues,
  } = useDialogContext();

  useEffect(() => {
    fetchLocations();
  }, []);

  const handleCheckboxChange = (location) => {
    const updatedLocations = checkedLocations.includes(location)
      ? checkedLocations.filter((d) => d !== location)
      : [...checkedLocations, location];
    setCheckedLocations(updatedLocations);

    // Remove checkedVenues when the relative location is unchecked
    const updatedVenues = checkedVenues.filter(
      (venue) => !venue.includes(location)
    );
    setCheckedVenues(updatedVenues);
  };

  return (
    <div>
      {locations.map((location) => (
        <Location
          key={location}
          location={location}
          handleCheckboxChange={handleCheckboxChange}
        />
      ))}
    </div>
  );
};

export default LocationList;
