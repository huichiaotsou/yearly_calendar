import { useAppContext } from "../../hooks/use_contexts";

function NavBarEventType({ checkedEventType, eventType, handleOnclickTab }) {
  return (
    <li
      className={`${checkedEventType === eventType ? "is-active" : ""}`}
      onClick={() => handleOnclickTab(eventType)}
    >
      <a>{eventType}</a>
    </li>
  );
}

export default function NavBar({ checkedEventType, setCheckedEventType }) {
  const { eventTypes } = useAppContext();

  function handleOnclickTab(tabName) {
    setCheckedEventType(tabName);
  }

  const allTab = (
    <li
      className={checkedEventType === "All" ? "is-active" : ""}
      onClick={() => handleOnclickTab("All")}
    >
      <a>All</a>
    </li>
  );

  const navBar = eventTypes.map((eventType) => {
    return (
      <NavBarEventType
        key={eventType}
        checkedEventType={checkedEventType}
        eventType={eventType}
        handleOnclickTab={handleOnclickTab}
      />
    );
  });

  const addEvent = (
    <li id="add_venue_button" className="button">
      Add Event
    </li>
  );

  return (
    <>
      <div className="tabs is-normal">
        <ul>
          {allTab}
          {navBar}
          {addEvent}
        </ul>
      </div>
    </>
  );
}
