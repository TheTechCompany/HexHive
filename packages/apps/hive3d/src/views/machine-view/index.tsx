import { Box, Text, List } from 'grommet';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts';
import ReactPlayer from 'react-player'
import { Player } from '../../components/player';

export interface MachineViewProps extends RouteComponentProps {

}

export const MachineView : React.FC<MachineViewProps> = (props) => {
    const [ data, setData ] = useState<any[]>([])
    const [ printer, setPrinter ] = useState<any>({})

    const getActiveJob = () => {
        return fetch("http://localhost:7000/graphql", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `
                    query Q {
                        printer {
                            name
                            temperature{ 
                                bedActual
                                bedTarget
                                toolActual
                                toolTarget
                            }
                            temperatureHistory {
                                time
                                bedActual
                               bedTarget
                               toolActual
                               toolTarget
                            }
                            jobs{
                                state
                                estimatedPrintTime
                                file{
                                  name
                                }
                                filament{
                                  length
                                  volume
                                }
                                progress {
                                  printTime
                                  printTimeLeft
                                }
                            }
                        }
                    }
                `
            })
        }).then((r) => r.json())
    }

    useEffect(() => {
        const canPlay = ReactPlayer.canPlay("http://3.26.93.103:8000/live/STREAM.flv")
        console.log(`Can: ${canPlay}`)
        getActiveJob().then((job) => {
            setPrinter(job.data.printer)
            setData(job.data.printer.temperatureHistory)
            console.log(job)
        })
    }, [])
    return (
        <Box pad="xsmall" background="neutral-2" gap="xsmall" direction="column" flex>
            <Box  gap="xsmall" direction="row">
                <Box direction="row" pad="xsmall" background="neutral-1" round="xsmall"  flex elevation="small">
                   <Text>{printer?.name}  </Text> <Text weight="bold">{printer.jobs?.[0]?.state}</Text>

                </Box>
                <Box
                    background="neutral-1"
                round="xsmall"  
                    align="center"
                    justify="center"
                    elevation="small">
            <LineChart width={500} height={300} data={data}>
                <XAxis dataKey="time"/>
                <YAxis/>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                <Line type="monotone" dataKey="bedActual" stroke="#8884d8" />
                <Line type="monotone" dataKey="bedTarget" stroke="#82ca9d" />
                <Line type="monotone" dataKey="toolActual" stroke="#8884d8" />
                <Line type="monotone" dataKey="toolTarget" stroke="#82ca9d" />
            </LineChart>
          </Box>
            </Box>
            <Box gap="xsmall" flex direction="row">
                <Box background="neutral-1" round="xsmall" flex elevation="small" direction="column">
                    <Box pad="xsmall" background="accent-2">
                        <Text>Jobs</Text>
                    </Box>
                    <List 
                            data={printer.jobs} >
                            {(datum) => (
                                <Box direction="row">
                                    <Text>
                                    {datum.file.name} - {(datum.estimatedPrintTime / 60 / 60).toFixed(2)}hrs
                                    </Text>
                                    <Text>
                                    {(datum.progress.printTimeLeft / 60 / 60).toFixed(2)}hrs - 
                                    {(datum.progress.printTimeLeft / datum.progress.printTime).toFixed(2)}%
                                    </Text>
                                </Box>
                            )}
                    </List>
                </Box>
                <Box background="neutral-1" round="xsmall" width={'500px'} elevation="small">
                    <Player url="http://localhost:8090/webcam/?action=stream&1631061331511" />
                </Box>
            </Box>



        </Box>
    )
}