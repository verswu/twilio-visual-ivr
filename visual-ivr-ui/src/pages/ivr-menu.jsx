import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link, useLocation} from 'wouter'
import { Stack, Combobox } from '@twilio-paste/core';
import constants from '../constants';
import {updateIvr} from '../hooks/api'; 
import { setConferenceName } from '../hooks/store/actions';

const IvrMenu = (props) => {
    const ivrState = constants.state.MAIN_MENU;
    const conference = useSelector(state => state.conference); 
    const dispatch = useDispatch(); 

    const makeAnnouncement = (conferenceObject) => {
        updateIvr(ivrState, conferenceObject)
        .then(response => {
            console.log('annoucement here');
        })
        .catch(err => {
            console.log('could not make announcement');
        })
    }

    useEffect(() => {
        const url = window.location.search;
        const name = new URLSearchParams(url).get('conference');
        if(name){
            const conferenceUpdate = { conference: name };
            dispatch(setConferenceName(conferenceUpdate));
        }
    },[ivrState]);

    useEffect(() => {
        if (conference.conference.length > 0) makeAnnouncement(conference); 
    },[conference])

    return (
        <div className = 'page'>
            <div className = 'content'>
                <h1 className = 'title'> Test Buy </h1>
                <Stack orientation='horizontal' spacing='space60'> 
                    <Link to = '/computers-tablets' > 
                        <button className = 'fill button'>Computers &amp; Tablets</button>
                    </Link>
                    <Link href = '/'> 
                        <button className = 'fill button'> Cell Phones &amp; Plans </button>
                    </Link>
                </Stack>
                <Stack orientation='horizontal' spacing="space60">
                    <Link to='/'> 
                        <button className = 'fill button'>Video Games &amp; Entertainment</button>
                    </Link>
                    <Link href = '/'> 
                        <button className = 'fill button'> Car &amp; Electronics </button>
                    </Link> 
                </Stack>
            </div>
        </div>
    );
}


export default IvrMenu;

