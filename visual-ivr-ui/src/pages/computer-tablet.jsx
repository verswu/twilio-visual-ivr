import React, { useEffect, useState } from 'react';
import { Stack, Box } from '@twilio-paste/core';
import { Link, useLocation } from 'wouter';
import constants from '../constants';
import {updateIvr} from '../hooks/api'; 
import { useSelector } from 'react-redux';

const ComputerTablets = (props) => {
    const [parentLocation] = useLocation();
    const ivrState = constants.state.SELECT_DEVICE_TYPE; 
    const conference = useSelector(state => state.conference);

    const makeAnnouncement = (conferenceObject) => {
        updateIvr(ivrState, conferenceObject)
        .then(response => {
            console.log('make announcement select computer type');
        })
        .catch(err => {
            console.log('could not make announcement select computer type');
        })
    }

    useEffect(() => {
        if (conference.conference.length > 0) makeAnnouncement(conference);
    },[ivrState]);
    return (
        <div className = 'page'>
            <div className = 'content'> 
                <h2 className = 'title'> First, let's get you the right help.<br/><br/> What are you having issues with? </h2>
                <Stack orientation='horizontal' spacing='space60'> 
                    <Link href ={`${parentLocation}/computers`}> 
                        <button className = 'fill button'>Computer</button>
                    </Link>
                    <Link href = '/'> 
                        <button className = 'fill button'>Tablet</button>
                    </Link>
                </Stack>
                <Stack orientation='horizontal' spacing='space60'> 
                    <Link href = '/'>
                        <button className = 'fill button'>Wifi &amp; Networking</button>
                    </Link>
                    <Link href = '/'>
                        <button className = 'fill button'>Printer</button>
                    </Link>
                </Stack>
                <Box style={{margin: '1rem'}}>
                    <Stack orientation='horizontal' spacing='space60'> 
                        <Link href = {`/`}>
                            <button className = 'fill button' style={{width: '120px', height: '60px'}} >Back</button>
                        </Link>
                    </Stack>
                </Box>
            </div>
        </div>
    );
}

export default ComputerTablets;