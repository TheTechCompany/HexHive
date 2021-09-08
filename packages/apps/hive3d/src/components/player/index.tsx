import { Box } from 'grommet';
import React, { useEffect, useRef } from 'react';
import mpegts from 'mpegts.js'

export interface PlayerProps {
    url?: string;
}

export const Player : React.FC<PlayerProps> = (props) => {
    const playerRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        if(props.url && playerRef.current){
            // var player = mpegts.createPlayer({
            //     type: 'mse',  // could also be mpegts, m2ts, flv
            //     isLive: true,
            //     url: props.url || "http://localhost:8090/live/LIVE.flv"
            // });
            // player.attachMediaElement(playerRef.current);
            // player.load();
            // player.play();
        }
    }, [props.url])

    return (
        <Box 
            style={{overflow: 'hidden'}}
            round="xsmall" flex>
            <img 
                style={{
                    backgroundImage: `url(${props.url})`,
                    backgroundSize: 'cover',
                    height: '100%', 
                    width: '100%'
                }}
                 ref={playerRef} />
        </Box>
    )
}