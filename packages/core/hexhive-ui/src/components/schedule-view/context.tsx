import React from 'react';

export interface IScheduleViewContext {
    projects?: any[];
    people?: any[];
    equipment?: any[];
}

export const ScheduleViewContext = React.createContext<IScheduleViewContext>({})