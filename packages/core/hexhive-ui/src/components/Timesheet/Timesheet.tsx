import React, { Component } from "react";
import Datatable from "./datatable";

export class Timesheet extends Component<any, any> {
  render() {
    const timesheetData = [
      { Date: "1/1/21", Hours: 12 },
      { Date: "1/2/21", Hours: 8 },
    ];
    return <Datatable data={timesheetData} />;
  }
}
