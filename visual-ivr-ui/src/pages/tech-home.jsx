import React, {useEffect} from 'react';
import constants from '../constants';
import { useSelector } from 'react-redux';
import {Link, useLocation} from 'wouter';
import {Stack} from '@twilio-paste/core';
import { updateIvr } from '../hooks/api';

const TechHome = (props) => {
    const [parentLocation] = useLocation();
    const ivrState = constants.state.SIGN_IN_PROCEED_AS_GUEST; 
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
            <h2 className = 'title'> When you sign in we can help you faster. </h2>
            <Stack orientation='horizontal' spacing='space60'> 
                <Link href = {`/sign-in`}>
                    <button className = 'fill button'>Sign In</button>
                </Link>
                <Link href = {`${parentLocation}/computer-type`}>
                    <button className = 'fill button'>Proceed as Guest</button>
                </Link>
            </Stack>
        </div>
    </div>
    )
}

export default TechHome;