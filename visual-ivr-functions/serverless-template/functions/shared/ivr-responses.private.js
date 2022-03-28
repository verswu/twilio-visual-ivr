const constants = {
    MAIN_MENU: 'main-menu',
    SELECT_DEVICE_TYPE: 'select-device-type',
    SELECT_DEVICE_ISSUE: 'select-device-issue', 
    SELECT_COMPUTER_HELP: 'select-computer-help',
    SELECT_COMPUTER_ISSUE: 'select-computer-issue',       
    SIGN_IN_PROCEED_AS_GUEST: 'sign-in-proceed-as-guest',
    SELECT_COMPUTER_TYPE: 'select-computer-type',
    ENTER_PC_INFORMATION: 'enter-pc-information',
    ENTER_LOGIN_INFORMATION: 'enter-login-information',
    SELECT_PC_SYMPTOMS: 'select-pc-symptoms',
    ASK_COMPUTER_REPAIR: 'ask-computer-repair',
    SCHEDULE_COMPUTER_REPAIR: 'schedule-computer-repair',
    COMPLETED_SCHEDULE_COMPUTER_REPAIR: 'completed-schedule-computer-repair'
}

const responses = {
    [constants.MAIN_MENU]: 'Select the topic your seeking help with.',
    [constants.SELECT_DEVICE_TYPE]: 'Select the device type you need assistance with.',
    [constants.SELECT_COMPUTER_HELP]: 'Select the help you need with you computer.',
    [constants.SIGN_IN_PROCEED_AS_GUEST]: 'Please sign in, or proceed as a guest to continue.',
    [constants.SELECT_COMPUTER_TYPE]: "Please select the type of computer you're calling about.",
    [constants.ENTER_PC_INFORMATION]: "Please, fill out the form to tell us more about your personal computer.",
    [constants.ENTER_LOGIN_INFORMATION]: "Sign in to continue",
    [constants.SELECT_COMPUTER_ISSUE]: "Select what you're experiencing from these top computer symptoms.",
    [constants.SELECT_COMPUTER_HELP]: "Select would kind of help you need with your computer.",
    [constants.ASK_COMPUTER_REPAIR]: "Would you like to schedule a repair for your computer? Click the button below.",
    [constants.SCHEDULE_COMPUTER_REPAIR]: 'Please select a date to schedule your repair. Then enter your email address so we can follow up with you about your appointment.',
    [constants.COMPLETED_SCHEDULE_COMPUTER_REPAIR]: 'Thank you for scheduling your appointment. We look forward to seeing you soon.',
}

const respond = (helpers, state) => {
    helpers.logger.info('grabbing response with state ', state);
    const twiml = new Twilio.twiml.VoiceResponse(); 
    const message = responses[state];
    twiml.say(message);
    helpers.logger.info(`selected message ${twiml}`);
    return twiml; 
}

module.exports = respond;