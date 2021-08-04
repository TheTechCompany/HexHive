import { Box, Text } from "grommet";
import { useState } from "react";
import Popover from "react-popover";
import { ScheduleCardProps } from "../schedule-card";
import { Content } from "./content";
import { Footer } from "./footer";
import { Header } from "./header";

export const ScheduleCard: React.FC<ScheduleCardProps> = ({ data, onMove, users, onClick }) => {
    const [hoverEl, setHoverEl] = useState<any>()

    const moveDown = () => {
        if (onMove) onMove(1)
    }

    const moveUp = () => {
        if (onMove) onMove(-1);
    }


    const hoverStart = (e: any) => {
        setHoverEl(e.currentTarget)

        //      this.setState({hovering: state})
    }

    const hoverEnd = (e: any) => {
        setHoverEl(null)
    }

    const isEmpty = () => {
        return !((data?.people && data?.people.length > 0) || (data?.equipment && data?.equipment.length > 0))
    }
    return (
        <Box
            elevation="small"
            overflow="hidden"
            round="xsmall"
            background="neutral-2">

            <Popover
                enterExitTransitionDurationMs={300}
                isOpen={(data?.notes || []).length > 0 && hoverEl != null}
                target={hoverEl}
                preferPlace={"right"}
                body={(
                    <div style={{background: "white"}}>
                        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>{data.notes.map((x) => (<li>{x}</li>))}</ul>
                    </div>)} >

                <Box
                    aria-owns={hoverEl != null ? 'mouse-over-notes' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={hoverStart}
                    onMouseLeave={hoverEnd}
                    className="schedule-card" >

                    <Header
                        moveUp={moveUp}
                        moveDown={moveDown}
                        data={data} />

                    <Box
                        pad="xsmall"
                        style={{ paddingBottom: (isEmpty() ? '16px' : undefined), position: 'relative' }} onClick={onClick}>
                        <Text size="small" weight="bold" className="card-title" >{data?.project.name}</Text>
                        <Content
                            users={users || []}
                            data={data} />
                    </Box>
                    <Footer
                        data={data} />
                </Box>
            </Popover>
        </Box>
    );
}