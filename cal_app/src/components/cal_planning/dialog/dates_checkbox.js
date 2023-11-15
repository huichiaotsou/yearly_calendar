import useDialogContext from "../../../hooks/use_dialog_context";
import useCalPlanningContext from "../../../hooks/use_cal_planning_context";

const WeekdaysList = () => {
  const { checkedDays, setCheckedDays, recurringDay } = useDialogContext();

  const { year } = useCalPlanningContext();

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
      <h2>
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
      </h2>

      {Object.entries(datesByMonth).map(([month, monthDates]) => (
        <div key={month}>
          <br />
          <h3>{`${new Date(year, month - 1, 1).toLocaleString("default", {
            month: "long",
          })}`}</h3>
          <div className="dates_in_month_container">
            {monthDates.map((date) => (
              <div key={date.getTime()} className="dates_in_month">
                <input
                  type="checkbox"
                  checked={checkedDays.includes(date.getTime())}
                  onChange={() => handleCheckboxChange(date.getTime())}
                />
                <label>{` ${date.getMonth() + 1}/${date.getDate()}`}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekdaysList;
