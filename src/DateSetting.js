import React from "react";

export default function Date (props) {
    let now = props.currentDate;
    console.log (now);
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thrusday",
        "Friday",
        "Saturday"
      ];
      let day = days[now.getDay()];
      let hour = now.getHours();
      if (hour < 10) {
        hour = `0${hour}`;
      }
      let minutes = now.getMinutes();
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
return ( <div className="currentDate">
  {day} {hour}:{minutes} </div>)
}