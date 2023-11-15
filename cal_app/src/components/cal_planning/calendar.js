function Days({ year, month }) {
  const weekdayOfFirstDay = new Date(year, month - 1, 1).getDay();
  const daysNumber = new Date(year, month, 0).getDate();

  const emptyDays = Array.from({ length: weekdayOfFirstDay }, (_, index) => (
    <div key={`empty-${month}-${index}`} className="calendar-day">
      {" "}
    </div>
  ));

  const days = Array.from({ length: daysNumber }, (_, day) => (
    <div
      key={`${year}-${month}-${day}`}
      className="calendar-day"
      data-date={`${year}-${month}-${day}`}
    >
      {day + 1}
    </div>
  ));

  return (
    <>
      {emptyDays}
      {days}
    </>
  );
}
function Month({ year, month }) {
  const monthName = new Date(year, month - 1, 1).toLocaleString("default", {
    month: "long",
  });

  return (
    <div className="month-container">
      <div className="calendar-header" colSpan={7}>
        {monthName}
      </div>
      <div
        className="calendar-day-name"
        style={{ backgroundColor: "rgb(234, 108, 108)" }}
      >
        Sun
      </div>
      <div className="calendar-day-name">Mon</div>
      <div className="calendar-day-name">Tue</div>
      <div className="calendar-day-name">Wed</div>
      <div className="calendar-day-name">Thu</div>
      <div className="calendar-day-name">Fri</div>
      <div className="calendar-day-name">Sat</div>
      <Days year={year} month={month} />
    </div>
  );
}

function Year({ currYear }) {
  const monthNames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const calendar = monthNames.map((m) => {
    return <Month year={currYear} month={m} key={`${currYear}-${m}`} />;
  });

  // TODO: get already planned calendar from API

  return calendar;
}

export default Year;
