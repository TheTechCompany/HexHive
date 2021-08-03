import { Box } from "grommet";
import React from "react";
import { Component } from "react";
import Config from '../../helpers/config/Config';
import {BaseStyle} from '@hexhive/styles'

export default class DataRow extends Component<any, any> {
    constructor(props: {} | Readonly<{}>) {
      super(props);
    }
    render() {
      return (
        <Box
          className="timeLine-main-data-row"
          style={{ 
              ...Config.values.dataViewPort.rows.style, 
              top: this.props.top, 
              height: this.props.itemheight, 
              borderBottom: `2px dashed ${BaseStyle.global?.colors?.["accent-2"] + "42"}`, 
              strokeDasharray: 1000, 
              strokeDashoffset: 1000 
            }}
        >
          {this.props.children}
        </Box>
      );
    }
  }
  