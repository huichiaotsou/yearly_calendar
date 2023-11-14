const WeekdaysList = ({
  currYear,
  weekdayPicked,
  checkedWeekdays,
  setCheckedWeekdays,
}) => {
  const getDatesByMonth = (currYear) => {
    const startDate = new Date(currYear, 0, 1);
    const endDate = new Date(currYear, 12 - 1, 31);
    const datesByMonth = {};

    while (startDate <= endDate) {
      if (startDate.getDay() === weekdayPicked) {
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

  const datesByMonth = getDatesByMonth(currYear);

  const handleCheckboxChange = (dateTime) => {
    const updatedWeedays = checkedWeekdays.includes(dateTime)
      ? checkedWeekdays.filter((d) => d !== dateTime)
      : [...checkedWeekdays, dateTime];
    setCheckedWeekdays(updatedWeedays);
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
          ][weekdayPicked]
        }{" "}
        in {currYear}
      </h2>
      {Object.entries(datesByMonth).map(([month, monthDates]) => (
        <div key={month}>
          <br />
          <h3>{`${new Date(currYear, month - 1, 1).toLocaleString("default", {
            month: "long",
          })}`}</h3>
          <div className="dates_in_month_container">
            {monthDates.map((date) => (
              <div key={date.toString()} className="dates_in_month">
                <input
                  type="checkbox"
                  checked={checkedWeekdays.includes(date.getTime())}
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
