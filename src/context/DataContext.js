import React, { createContext, useEffect, useState } from "react";
import DataService from "../services/DataService";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  //condition to check if the start button has been clicked
  const [isStarted, setIsStarted] = useState(false);
  const [data, setData] = useState([]);

  //Function to render when the server is on
  useEffect(() => {
    getAllData();
  }, []);

  const timeStart = () => {
    DataService.startTime().then((res) => {
      setIsStarted(true);
      return res.data;
    });
  };

  const timeStop = () => {
    DataService.endTime().then((res) => {
      //to get the last object
      data.push(res.data);
      setIsStarted(false);
    });
  };

  const getAllData = () => {
    DataService.getAllData().then((res) => {
      setData(res.data);
    });
  };

  return (
    <DataContext.Provider
      value={{
        timeStart,
        timeStop,
        data,
        getAllData,
        DataProvider,
        isStarted,
        setIsStarted,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
