import React, {useEffect} from 'react'; 
import { useSelector } from 'react-redux';
import {Link, useLocation} from 'wouter';
import {Stack, Box} from '@twilio-paste/core';
import constants from '../constants';
import {updateIvr} from '../hooks/api'; 

const Computers = (props) => {
    const ivrState = constants.state.SELECT_COMPUTER_HELP; 
    const conference = useSelector(state => state.conference);

    const makeAnnouncement = (conferenceObject) => {
        updateIvr(ivrState, conferenceObject)
        .then(response => {
            console.log('make announcement select computer issue');
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
                <h2 className = 'title'> What kind of help do you need? </h2>
                <Stack orientation='horizontal' spacing='space60'> 
                    <Link href ={`/tech`}> 
                        <button className = 'fill button'>Troubleshoot an issue online</button>
                    </Link>
                    <Link href = '/tech'> 
                        <button className = 'fill button'>Chat with an Agent for repair help now</button>
                    </Link>
                </Stack>
                <Stack orientation='horizontal' spacing='space60'> 
                    <Link href = '/tech'>
                        <button className = 'fill button'>Schedule a repair, tune-fill, or consultation</button>
                    </Link>
                    <Link href = '/tech'>
                        <button className = 'fill button'>Schedule time to pick fill your device</button>
                    </Link>
                </Stack>
                <Box style={{margin: '1rem'}}>
                    <Stack orientation='horizontal' spacing='space60'> 
                        <Link href = {`/computers-tablets`}>
                            <button className = 'fill button' style={{width: '120px', height: '60px'}} >Back</button>
                        </Link>
                    </Stack>
                </Box>
            </div>
        </div>
    )
}

export default Computers;