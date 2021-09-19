import React from "react";

export default function FormatedDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  if (hour < 12) {
    hour = "0" + hour;
  }
  let min = props.date.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  return (
    <div>
      {day} {hour}:{min}
    </div>
  );
}
