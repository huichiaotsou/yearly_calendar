import { useAppContext } from "../../hooks/use_contexts";

function NavBarCity({ checkedLocation, city, handleOnclickTab }) {
  return (
    <li
      className={checkedLocation === city ? "is-active" : ""}
      onClick={() => handleOnclickTab(city)}
    >
      <a>{city}</a>
    </li>
  );
}

export default function NavBar({ checkedLocation, setCheckedLocation }) {
  const { locations } = useAppContext();

  console.log("locations: ", locations);

  function handleOnclickTab(tabName) {
    setCheckedLocation(tabName);
  }

  return (
    <>
      <div className="tabs">
        <ul>
          <li
            className={checkedLocation === "All" ? "is-active" : ""}
            onClick={() => handleOnclickTab("All")}
          >
            <a>All</a>
          </li>

          {locations.map((city) => {
            return (
              <NavBarCity
                key={city}
                checkedLocation={checkedLocation}
                city={city}
                handleOnclickTab={handleOnclickTab}
              />
            );
          })}
          <li id="add_venue_button" className="button">
            Add Venue
          </li>
        </ul>
      </div>
    </>
  );
}
