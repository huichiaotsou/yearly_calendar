import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import config from "../config.json";

const DialogContext = createContext();

function getTodayDateString() {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
}

function DialogProvider({ children }) {
  // Event details
  const [events, setEvents] = useState([]);

  const [isRecurring, setIsRecurring] = useState(false);
  const [locations, setLocations] = useState([]);
  const [venues, setVenues] = useState([]);

  const [dateStart, setDateStart] = useState(getTodayDateString());
  const [dateEnd, setDateEnd] = useState(getTodayDateString());
  const [recurringDay, setRecurringDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // Checked States
  const [checkedDays, setCheckedDays] = useState([]);
  const [checkedEvent, setCheckedEvent] = useState("");
  const [checkedLocations, setCheckedLocations] = useState([]);
  const [checkedVenues, setCheckedVenues] = useState([]);

  const fetchVenues = async (locations) => {
    const venues = [];
    // const res = await axios.get(
    //   `http://${config.domain}:${
    //     config.backendPort
    //   }/venues/locations=?${locations.join()}`
    // );
    // venues.push(res.data);

    if (locations.includes("Taipei")) {
      venues.push("Main Hall (Taipei)");
      venues.push("Gather (Taipei)");
      venues.push("Glassroom (Taipei)");
    }

    if (locations.includes("Taichung")) {
      venues.push("Main Hall (Taichung)");
      venues.push("Room 103 (Taichung)");
    }

    setVenues(venues);
  };

  const fetchLocations = async () => {
    // const res = await axios.get(
    //   `http://${config.domain}:${config.backendPort}/venues/locations=_&_`
    // );
    setLocations(["Taipei", "Taichung"]);
  };

  function resetAllFields() {
    setIsRecurring(false);
    setCheckedEvent("");
    setCheckedLocations([]);
    setCheckedVenues([]);
    setRecurringDay("");
    setDateStart(getTodayDateString());
    setDateEnd(getTodayDateString());
    setCheckedDays([]);
    setStartTime("");
    setEndTime("");
  }

  const fetchEvents = async () => {
    // const res = await axios.get(
    //   `http://${config.domain}:${config.backendPort}/eventtypes`
    // );
    // return setEventTypes(res.data);
    setEvents([
      "---------- Peak Sundays ----------",
      "Easter",
      "Summer",
      "Christmas",
      "---------- 年度大活動 ----------",
      "Heart & Soul",
      "ECHO",
      "母親節",
      "父親節",
      "Forward",
      "系列講道",
      "---------- 跨部門活動 ----------",
      "2024 盼新春",
      "2025 盼新春",
      "Hope Week",
      "教會生日",
      "Kingdom Heart",
      "The Hope College 畢業典禮",
      "The Hope College 開學典禮",
      "Appreciation Luncheon",
      "---------- Campus(單一部門對外活動) ----------",
      "Belong",
      "Volunteer Fair",
      "Baptism",
      "English Fellowship",
      "HopeFam Gathering",
      "門徒的旅程-1(共五堂)",
      "門徒的旅程-2(共五堂)",
      "門徒的旅程-3(共四堂)",
      "TPE 婚前輔導(共六堂)",
      "單身講座(共一堂)",
      "夫妻營會",
      "受洗課(共一堂)",
      "理財講座(共一堂)(與Online同步)",
      "Leadership 講座(共一堂)",
      "yth night",
      "HYPE",
      "Kids Serve Day",
      "NextGen 家長會",
      "Children's Dedication",
      "Hope Kids Graduation",
      "DMM",
      "---------- Campus Leadership ----------",
      "第四屆招生說明會",
      "第四屆面試",
      "---------- 團隊內部活動 ----------",
      "Taipei Campus Team Night",
      "Online Campus Team Night",
      "Creative Team Night",
      "TPE+CRTV Night",
      "But First",
      "其他節目",
      "Worship Auditions",
      "Choir Auditions",
      "THC 經歷神營會",
      "Student Monthly Party",
      "THC 短宣",
      "Purpose",
      "---------- Staff 活動 ----------",
      "Staff Retreat",
      "Staff Advance",
      "2024 年團圓飯",
      "2025 年團圓飯",
      "2024 年大掃除",
      "2025 年大掃除",
      "Staff 感恩餐會",
    ]);
  };

  const deleteEvent = async () => {};
  const modifyEvent = async () => {};
  const editEvent = async () => {};

  const dialogContexts = {
    // events
    events,
    setEvents,
    checkedEvent,
    setCheckedEvent,
    isRecurring,
    setIsRecurring,

    // locations
    locations,
    setLocations,
    checkedLocations,
    setCheckedLocations,
    fetchLocations,

    // venues
    venues,
    setVenues,
    checkedVenues,
    setCheckedVenues,
    fetchVenues,

    // date & time
    recurringDay,
    dateStart,
    setDateStart,
    dateEnd,
    setDateEnd,
    checkedDays,
    setCheckedDays,
    setRecurringDay,
    startTime,
    setStartTime,
    endTime,
    setEndTime,

    // functions - reset
    resetAllFields,

    // functions - event types
    fetchEvents,
    deleteEvent,
    modifyEvent,
    editEvent,
  };

  return (
    <DialogContext.Provider value={dialogContexts}>
      {children}
    </DialogContext.Provider>
  );
}

export { DialogProvider };
export default DialogContext;
