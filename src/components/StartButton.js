import DataContext from "../context/DataContext.js";
import React, { useContext } from "react";

const StartButton = () => {
  const { timeStart, isStarted, setIsStarted } = useContext(DataContext);

  const handelSubmit = () => {
    setIsStarted(true);
    timeStart();
  };

  return (
    <div className=".d-lg-none  w-25 position-absolute top-50 start-50 translate-middle">
      {/* condition to disable button */}
      {isStarted ? (
        <button
          size="lg"
          className="btn btn-outline-success"
          type="button"
          onClick={handelSubmit}
          disabled
        >
          Start
        </button>
      ) : (
        /* else */
        <button
          className="p-3 btn btn-outline-success"
          type="button"
          onClick={handelSubmit}
        >
          Start
        </button>
      )}
    </div>
  );
};
export default StartButton;
