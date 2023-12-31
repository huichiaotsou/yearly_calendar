import { useDialogContext } from "../../hooks/use_contexts";
import { useAppContext } from "../..//hooks/use_contexts";

const Day = ({ date, handleCheckboxChange }) => {
  const { year } = useAppContext();
  const { checkedDays } = useDialogContext();

  const showEvents = (dateString) => {
    console.log("show events of date: ", dateString);
  };

  return (
    <div className="dates_in_month">
      <input
        className="date_unit_checkbox"
        type="checkbox"
        checked={checkedDays.includes(date.getTime())}
        onChange={() => handleCheckboxChange(date.getTime())}
      />
      <label
        className="date_unit"
        onClick={() => {
          showEvents(`${year}-${date.getMonth() + 1}-${date.getDate()}`);
        }}
      >{` ${date.getMonth() + 1}/${date.getDate()}`}</label>
    </div>
  );
};

const WeekdaysList = () => {
  const { checkedDays, setCheckedDays, recurringDay } = useDialogContext();

  const { year } = useAppContext();

  const getDatesByMonth = (currYear) => {
    const startDate = new Date(currYear, 0, 1);
    const endDate = new Date(currYear, 12 - 1, 31);
    const datesByMonth = {};

    while (startDate <= endDate) {
      if (startDate.getDay().toString() === recurringDay) {
        const month = startDate.getMonth() + 1;
        if (!datesByMonth[month]) {
          datesByMonth[month] = [];
        }
        datesByMonth[month].push(new Date(startDate));
      }
      startDate.setDate(startDate.getDate() + 1);
    }

    return datesByMonth;
  };

  const datesByMonth = getDatesByMonth(year);

  const handleCheckboxChange = (dateTime) => {
    const updatedWeedays = checkedDays.includes(dateTime)
      ? checkedDays.filter((d) => d !== dateTime)
      : [...checkedDays, dateTime];
    setCheckedDays(updatedWeedays);
  };

  return (
    <div>
      <div className="dialog_titles">
        {"List of "}
        {
          [
            "Sundays",
            "Mondays",
            "Tuesdays",
            "Wednesdays",
            "Thursdays",
            "Fridays",
            "Saturdays",
          ][recurringDay]
        }{" "}
        in {year}
      </div>

      {Object.entries(datesByMonth).map(([month, monthDates]) => (
        <div key={month} className="month_container_checkbox">
          <br />
          <h3>{`${new Date(year, month - 1, 1).toLocaleString("default", {
            month: "long",
          })}`}</h3>
          <div className="dates_in_month_container">
            {monthDates.map((date) => (
              <Day
                key={date.getTime()}
                date={date}
                handleCheckboxChange={handleCheckboxChange}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekdaysList;
