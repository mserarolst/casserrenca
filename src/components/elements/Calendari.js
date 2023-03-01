import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
const API_KEY = "AIzaSyBIOqUnwC_gy7poH_wOgsDrrjG7UCnCoX8";
let calendars = [
  {
    calendarId: "masiaelpinatell@gmail.com",
    color: "#cd0505"
  }
];
let styles = {
  calendar: {
    backgroundColor: "#fff",
    color: "white",
    maxHeight: '100%',
    color: '#1e1e1e',
    fontSize: '10px'
  },

  day: {
    //height: '50px',
    color: '#1e1e1e'
  },

  tooltip: {
    color: 'transparent',
    display: 'none'
  },

  today: {
    color: "#4285F4"
  },
  event: {
    color: '#cd0505',
    backgroundColor: '#cd0505'
  },
  eventText: {
    color: "#cd0505 !important"
  },
  multiEvent: {
    color: '#cd0505',
    backgroundColor: '#cd0505'
  }
};
export default class Calendari extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#fff",
          maxHeight: "800px",
          height: '100%'
        }}
      >
        <Calendar
          apiKey={API_KEY}
          styles={styles}
          calendars={calendars}
          showFooter={false}
          language='ES'
        />
      </div>
    );
  }
}
