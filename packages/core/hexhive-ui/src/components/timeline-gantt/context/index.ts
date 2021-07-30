import React from "react";
import { Link, Task, TimelineStyle } from "../types";

export interface ITimelineContext {
    moveTimeline?: (new_x: number) => void;
    scrollLeft?: number;

    style?: TimelineStyle

    mode?: string;

    links?: Link[];
    data?: Task[];

    dayWidth?: number;
    itemHeight?: number;

    changeMode?: (mode: string) => void;
}   

export const TimelineContext = React.createContext<ITimelineContext>({})