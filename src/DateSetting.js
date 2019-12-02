import React from "react";

export default function Date (props) {

  if (props.currentDate) {
    let currentDate = props.currentDate;
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thrusday",
        "Friday",
        "Saturday"
      ];
      let day = days[currentDate.getDay()];
      let hour = currentDate.getHours();
      if (hour < 10) {
        hour = `0${hour}`;
      }
      let minutes = currentDate.getMinutes();
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
return ( <div className="currentDate">
  {day} {hour}:{minutes} </div>)
}
return (<div className="currentDate"></div>)}