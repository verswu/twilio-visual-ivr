const Helpers = require(Runtime.getFunctions()['helpers/index'].path);
const ivrResponses = require(Runtime.getFunctions()['shared/ivr-responses'].path);

exports.handler = (context, event, callback) => {
    const helpers = new Helpers(context, event);
    helpers.logger.info('making an announcement through an update /say-something ', helpers.stringify(event));
    try{
        const twiml = ivrResponses(helpers, event.state);
        return callback(null, twiml);
    }
    catch(err){
        helpers.logger.error(`An error occurred within /say-something ${err}`);
        return callback(err);
    }
}