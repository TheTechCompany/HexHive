import React from 'react';

import {
    Box
} from 'grommet';

import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Line
} from 'recharts'

import styled from 'styled-components'

export interface BaseGraphProps {
    className?: string;

    data?: Array<any>;

    xKey?: string;
    yKey?: string;
}

const BaseGraph: React.FC<BaseGraphProps> = (props) => {
    return (
        <Box className={props.className}>
            <ResponsiveContainer>
                <LineChart
                    margin={{ left: 0, top: 8, bottom: 8, right: 8 }}
                    data={props.data} >
                    <XAxis dataKey={props.xKey} />
                    <YAxis dataKey={props.yKey} />
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line type="monotone" dataKey={props.yKey} stroke="#ff7300" />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    )
}

export const Graph = styled(BaseGraph)`

`