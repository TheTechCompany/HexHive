import React, { useState, Component, useEffect } from "react";
import Datatable from "./datatable";

export interface TimesheetData {
  timesheetData: { name: string; hours: number }[];
}

export const Timesheet: React.FC<TimesheetData> = (props) => {
  const [data, setData] = useState<any[]>([{ name: "bob", hours: 7 }]);

  useEffect(() => {
    const timer = setInterval(() => setData([...data, { name: "bob" }]), 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <Datatable data={data} />;
};
