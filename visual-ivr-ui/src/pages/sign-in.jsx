import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link, useLocation} from 'wouter';
import {Stack, Label, Input, Card,Box} from '@twilio-paste/core';
import constants from '../constants';
import { updateIvr } from '../hooks/api';
import { setUserEmail } from '../hooks/store/actions';

const SignIn = (props) => {
    const ivrState = constants.ENTER_LOGIN_INFO;
    const [location, setLocation] = useLocation();
    const dispatch = useDispatch();
    const conference = useSelector(state => state.conference);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (update) => {
        console.log('updating email woah', update.target.value);
        setEmail(update.target.value);
    };
    const handlePassword = (update) => setPassword(update.target.value);

    const makeAnnouncement = (conferenceObject) => {
        updateIvr(ivrState, conferenceObject)
        .then(response => {
            console.log('make announcement in sign in page');
        })
        .catch(err => {
            console.log('could not make announcement in sign in page');
            console.log(err);
        })
    }

    const handleSignIn = () => {
        console.log('setting email', email);
        dispatch(setUserEmail({email}));
        setLocation('/tech/computer-type');
    }

    useEffect(() => {
        if (conference.conference.length > 0) makeAnnouncement(ivrState, conference);
    },[ivrState]);

    return (
        <div className = 'page'>
            <div className = 'content'> 
                <h2 className = 'title'> What device are you having problems with?</h2>
                <Card padding='space120'>
                    <Stack orientation='vertical' spacing='space60'> 
                    <div>
                        <Label>Email </Label>
                        <Input 
                            name='email'
                            placeholder=''
                            type='email'
                            onChange={handleEmail}
                        /> 
                        {/* <HelpText>The model number will help us provide the most accurate diagnosis of your tech problem.</HelpText> */}
                    </div>
                        <div>
                            <Label>Password</Label>
                            <Input 
                                name='password'
                                placeholder=''
                                type='password'
                                onChange={handlePassword}
                            /> 
                            {/* <HelpText>The model number will help us provide the most accurate diagnosis of your tech problem.</HelpText> */}
                        </div>
                    </Stack>
                </Card>
                <Box style = {{margin: '1rem'}}>
                    <Stack orientation='horizontal' spacing='space60'> 
                        <Link href = {`/tech`}>
                            <button className = 'fill button' style={{width: '120px', height: '60px'}}>Back</button>
                        </Link>
                        {/* <Link href = {`/tech/computer-type`}> */}
                            <button onClick = {handleSignIn} className = 'fill button' style={{width: '120px', height: '60px'}}>Submit</button>
                        {/* </Link> */}
                    </Stack>
                </Box>
            </div>
        </div>
    )
}

export default SignIn;