function Month() {
  return (
    <div className="month-container">
      <div className="calendar-header" colSpan={7}>
        November 2023
      </div>
      <div
        className="calendar-day-name"
        style={{ "background-color": "rgb(234, 108, 108)" }}
      >
        Sun
      </div>
      <div className="calendar-day-name">Mon</div>
      <div className="calendar-day-name">Tue</div>
      <div className="calendar-day-name">Wed</div>
      <div className="calendar-day-name">Thu</div>
      <div className="calendar-day-name">Fri</div>
      <div className="calendar-day-name">Sat</div>
      {/* Fill in the dates for November 2023 */}
      <div className="calendar-day"> </div>
      <div className="calendar-day"> </div>
      <div className="calendar-day"> </div>
      <div className="calendar-day">1</div>
      <div className="calendar-day">2</div>
      <div className="calendar-day">3</div>
      <div className="calendar-day">4</div>
      <div className="calendar-day">5</div>
      <div className="calendar-day">6</div>
      <div className="calendar-day">7</div>
      <div className="calendar-day">8</div>
      <div className="calendar-day">9</div>
      <div className="calendar-day">10</div>
      <div className="calendar-day">11</div>
      <div className="calendar-day">12</div>
      <div className="calendar-day">13</div>
      <div className="calendar-day">14</div>
      <div className="calendar-day">15</div>
      <div className="calendar-day">16</div>
      <div className="calendar-day">17</div>
      <div className="calendar-day">18</div>
      <div className="calendar-day">19</div>
      <div className="calendar-day">20</div>
      <div className="calendar-day">21</div>
      <div className="calendar-day">22</div>
      <div className="calendar-day">23</div>
      <div className="calendar-day">24</div>
      <div className="calendar-day">25</div>
      <div className="calendar-day">26</div>
      <div className="calendar-day">27</div>
      <div className="calendar-day">28</div>
      <div className="calendar-day">29</div>
      <div className="calendar-day">30</div>
      <div className="calendar-day"></div>
      <div className="calendar-day"></div>
    </div>
  );
}

function Year() {
  // TODO: get yearly calendar from API
  const response = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const diaries = response.map((data) => {
    return <Month />;
  });

  return diaries;
}

export default Year;
