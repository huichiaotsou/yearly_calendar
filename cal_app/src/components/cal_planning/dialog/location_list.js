import { useEffect } from "react";
import { useDialogContext } from "../../../hooks/use_contexts";

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
  const { locations, checkedLocations, setCheckedLocations, fetchLocations } =
    useDialogContext();

  useEffect(() => {
    fetchLocations();
  }, []);

  const handleCheckboxChange = (venue) => {
    const updatedLocations = checkedLocations.includes(venue)
      ? checkedLocations.filter((d) => d !== venue)
      : [...checkedLocations, venue];
    setCheckedLocations(updatedLocations);
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
