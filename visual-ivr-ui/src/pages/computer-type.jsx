import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {Link, useLocation} from 'wouter';
import {Stack, Box} from '@twilio-paste/core';
import constants from '../constants';
import { updateIvr } from '../hooks/api';

const ComputerType = (props) => {
    const [parentLocation] = useLocation();
    const ivrState = constants.state.SELECT_COMPUTER_TYPE; 
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
                <h2 className = 'title'> What device are you having problems with?</h2>
                <Stack orientation='horizontal' spacing='space60'> 
                    <Link href = {`/tech/computer-info`}>
                        <button className = 'fill button'>PC</button>
                    </Link>
                    <Link href = '/tech/computer-info'>
                        <button className = 'fill button'>Mac</button>
                    </Link>
                </Stack>
                <Stack orientation='horizontal' spacing='space60'> 
                    <Link href='/tech/computer-info'>
                        <button className = 'fill button'>Microsoft Surface</button>
                    </Link>
                </Stack>
                <Box style={{margin: '1rem'}}>
                    <Stack orientation='horizontal' spacing='space60'> 
                        <Link href = {`/tech`}>
                            <button className = 'fill button' style={{width: '120px', height: '60px'}} >Back</button>
                        </Link>
                    </Stack>
                </Box>
            </div>
        </div>
    )
}

export default ComputerType;