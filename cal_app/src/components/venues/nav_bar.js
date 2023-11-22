export default function NavBar({ checkedLocation, setCheckedLocation }) {
  function handleOnclickTab(tabName) {
    setCheckedLocation(tabName);
  }

  return (
    <div className="tabs">
      <ul>
        <li
          className={checkedLocation === "All" ? "is-active" : ""}
          onClick={() => handleOnclickTab("All")}
        >
          <a>All</a>
        </li>
        <li
          className={checkedLocation === "Taipei" ? "is-active" : ""}
          onClick={() => handleOnclickTab("Taipei")}
        >
          <a>Taipei</a>
        </li>
        <li
          className={checkedLocation === "Taichung" ? "is-active" : ""}
          onClick={() => handleOnclickTab("Taichung")}
        >
          <a>Taichung</a>
        </li>
      </ul>
    </div>
  );
}
