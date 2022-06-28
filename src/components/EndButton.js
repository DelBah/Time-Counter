import DataContext from "../context/DataContext.js";
import React, { useContext } from "react";

const EndButton = () => {
  const { isStarted, timeStop } = useContext(DataContext);

  const handelSubmit = (event) => {
    // check if clock is started
    if (isStarted) {
      timeStop();
    } else alert("You have to statrt a clock!");
  };

  return (
    <div className="mx-5 position-absolute top-50 start-50 translate-middle">
      <button
        size="lg"
        className="p-3 btn btn-outline-danger "
        onClick={handelSubmit}
      >
        End
      </button>
    </div>
  );
};
export default EndButton;
