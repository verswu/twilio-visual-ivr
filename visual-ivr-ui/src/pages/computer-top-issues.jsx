import React, {useEffect} from 'react'; 
import { useSelector } from 'react-redux';
import {Link} from 'wouter'; 
import {Stack, Card, Box} from '@twilio-paste/core'; 
import constants from '../constants';
import { updateIvr } from '../hooks/api';

const ComputerTopIssues = (props) => {
    const ivrState = constants.state.SELECT_COMPUTER_ISSUE; 
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
                <h2 className = 'title'> What are the symptoms?</h2>
                <Card padding='space20'> 
                    <Stack orientation='horizontal' spacing='space40'> 
                        <button className = 'fill button button-select'>Frequent computer errors and crashes</button>
                        <button className = 'fill button button-select'>Software not working</button>
                    </Stack>
                    <Stack orientation='horizontal' spacing='space40'>
                        <button className = 'fill button button-select'>Keyboard not working</button>
                        <button className = 'fill button button-select'>Damaged exterior</button>
                    </Stack>
                    <Stack orientation='horizontal' spacing='space40'>
                        <button className = 'fill button button-select'>Damaged exterior (bottom)</button>
                        <button className = 'fill button button-select'>I have a different problem</button>
                    </Stack>
                </Card>
                <Box style={{margin: '1rem'}}>
                <Stack orientation='horizontal' spacing='space60'> 
                    <Link href = {`/tech/computer-info`}>
                        <button className = 'fill button' style={{width: '120px', height: '60px'}} >Back</button>
                    </Link>
                    <Link href = '/tech/repair-fulfillment'>
                        <button className = 'fill button' style={{width: '120px', height: '60px'}}>Next</button>
                    </Link>
                </Stack>
                </Box>
            </div>
        </div>
    )
}

export default ComputerTopIssues;