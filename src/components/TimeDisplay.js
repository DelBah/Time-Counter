import DataContext from "../context/DataContext.js";
import React, { useContext } from "react";

const TimeDisplay = () => {
  const { data } = useContext(DataContext);

  const timeSpent = data.map((the, i) => {
    let num = data.length;
    if (i + 1 === num) {
      return the.timeSpent;
    }
  });

  return (
    <p className=".d-lg-none  mt-5 list-inline position-absolute top-50 start-50 translate-middle">
      {timeSpent}
    </p>
  );
};
export default TimeDisplay;
