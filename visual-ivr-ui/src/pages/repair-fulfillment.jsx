import React, {useEffect} from 'react'; 
import { useSelector } from 'react-redux';
import {Link} from 'wouter'; 
import {Stack, Card, Box, Text, Separator} from '@twilio-paste/core';
import constants from '../constants';
import { updateIvr } from '../hooks/api';

const RepairFulfillment = (props) => {
    const ivrState = constants.state.ASK_COMPUTER_REPAIR; 
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

    const getPrice = () => {
        return "$150.00";
    }

    useEffect(() => {
        if (conference.conference.length > 0) makeAnnouncement(conference);
    },[ivrState]);


    return (
        <div className = 'page'>
            <div className = 'content'> 
                <h2 className = 'title'>Here's a possible diagnosis and how we can help.</h2>
                <Card>
                    <Box padding='space60' display='flex'>  
                        <Text> In-Store Repair </Text>
                        <Separator orientation='vertical' horizontalSpacing={'space40'} />
                        <Text> {getPrice()} </Text>
                        <Separator orientation='vertical' horizontalSpacing={'space40'} />
                        <Link href = {`/schedule-appointment`}>
                            <button className = 'fill button' style={{width: '175px', height: '60px', color: 'white', backgroundColor: 'blue'}}>Schedule Appointment</button>
                        </Link>
                    </Box>
                </Card>
                <Box style={{margin: '1rem'}}>
                    <Stack orientation='horizontal' spacing="space60">
                        <Link to='/tech/computer-top-issues'> 
                            <button className = 'fill button' style={{width: '120px', height: '60px'}}>Back</button>
                        </Link>
                    </Stack>
                </Box>
            </div>
        </div>
    )
}

export default RepairFulfillment;