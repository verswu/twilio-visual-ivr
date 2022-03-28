const Helpers = require(Runtime.getFunctions()['helpers/index'].path);

exports.handler = (context, event, callback) => {
    const helpers = new Helpers(context, event);
    helpers.logger.info(`connecting customer to ivr conference /connect-to-conference ${helpers.stringify(event)}`);
    try{
        let response = helpers.twilio.defaultResponse();
        const twiml = new Twilio.twiml.VoiceResponse();
        const dial =  twiml.dial();
        const conference = event.conference;
        helpers.logger.info(`We have a conference name of ${conference}`);
        twiml.say('adding you to the conference'); 
        dial.conference({
            startConferenceOnEnter: true,
            endConferenceOnExit: true,
        }, conference);

        helpers.logger.info(`twiml response content ${twiml}`);
        
        return callback(null, twiml);
}
    catch(err){
        helpers.logger.error(`There was an error in /get-conference-name`); 
        helpers.logger.error(err);
        return callback(err);
    }
}