import React, { Component } from "react";
import Datatable from "./datatable";

export class Timesheet extends Component<any, any> {
  render() {
    const { initData } = this.props;
    return <Datatable data={initData} />;
  }
}
