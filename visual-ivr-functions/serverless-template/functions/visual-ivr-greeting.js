const Helpers = require(Runtime.getFunctions()['helpers/index'].path)

exports.handler = (context, event, callback) => {
    const helpers = new Helpers(context, event); 
    helpers.logger.info(`Entered visual ivr greeting /visual-ivr-greeting ${event}`); 
    try{
        const twiml = new Twilio.twiml.VoiceResponse();
        twiml.say('Thanks for choosing the Test Buy Visual IVR, navigate to the site for your options');

        helpers.logger.info(`visual ivr greeting twiml ${twiml.toString()}`); 
        return callback(null, twiml);
    }
    catch(err){
        helpers.logger.error('There was an error with the visual ivr greeting /visual-ivr-greeting');
        helpers.logger.error(err);
        return callback(err);
    }
}