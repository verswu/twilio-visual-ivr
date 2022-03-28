import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import {Link, useLocation} from 'wouter';
import {Stack, Card, Combobox, Input, Label, HelpText, Box } from '@twilio-paste/core';
import constants from '../constants';
import { updateIvr } from '../hooks/api';

const ComputerInfo = (props) => {
    const computerBrands = ['Acer', 'Alienware', 'Apple', 'Asus'];
    const [selectedBrand, setSelectedBrand] = useState('');
    const ivrState = constants.state.ENTER_PC_INFORMATION; 
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

    const handleBrandSelection = (selected) => setSelectedBrand(selected);

    useEffect(() => {
        if (conference.conference.length > 0) makeAnnouncement(conference);
    },[ivrState]);


    return (
        <div className = 'page'>
            <div className = 'content'> 
                <h2 className = 'title'> Sign In </h2>
                <Card padding='space120'> 
                    <Stack orientation='vertical' spacing='space60'>
                        <Combobox autocomplete 
                            items = {computerBrands} 
                            labelText='Brand'
                            onSelectedItemChange={(changes) => {
                                if (changes.selectedItem !== null) handleBrandSelection(changes.selectedItem);
                            }}
                            required
                        /> 
                        <div>
                            <Label>Model Number </Label>
                            <Input 
                                name='model_number'
                                placeholder='e.g. MC700LLA'
                                type='text'
                                onChange={(change) => console.log('changes: ', change)}
                            /> 
                            <HelpText>The model number will help us provide the most accurate diagnosis of your tech problem.</HelpText>
                        </div>
                        <div>
                            <Label>Serial Number </Label>
                            <Input 
                                name='model_number'
                                placeholder='e.g. 91234912491'
                                type='text'
                                onChange={(change) => console.log('changes: ', change)}
                            /> 
                            <HelpText>The model number will help us provide the most accurate diagnosis of your tech problem.</HelpText>
                        </div>
                        
                    </Stack>
                </Card>
                <Box style={{margin: '1rem'}}>
                    <Stack orientation='horizontal' spacing='space60'> 
                        <Link href = {`/tech/computer-type`}>
                            <button className = 'fill button' style={{width: '120px', height: '60px'}} >Back</button>
                        </Link>
                        <Link href = '/tech/computer-top-issues'>
                            <button className = 'fill button' style={{width: '120px', height: '60px'}}>Next</button>
                        </Link>
                    </Stack>
                </Box>
            </div>
        </div>
    )
}

export default ComputerInfo;