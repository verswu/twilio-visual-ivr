const Helpers = require(Runtime.getFunctions()['helpers/index'].path);

exports.handler = (context, event, callback) => {
    const helpers = new Helpers(context, event);
    helpers.logger.info(`updating the ivr with an announcement /update-ivr ${helpers.stringify(event)}`);
    const client = helpers.twilio.createClient(context);
    const conferenceName = event.confName;
    const state = event.state;
    helpers.logger.info(`State of the IVR is ${event.state}`);
    let response = helpers.twilio.defaultResponse();

    client.conferences.list({friendlyName: conferenceName})
    .then(conferences => {
        helpers.logger.info(`Conferences found ${conferences}`)
        const conference = conferences[0];
        client.conferences(conference.sid)
        .update({announceUrl: `https://visual-ivr-functions-4076-dev.twil.io/say-something?state=${state}`})
        .then(updates => {
            helpers.logger.info(`Made updates to Conference for announcement ${updates}`);
            response = helpers.twilio.okResponse();
            return callback(null, response);
        })
        .catch(err => {
            helpers.logger.error(`An error occurred updating the specificed conference /update-ivr`);
            helpers.logger.error(err);
            return callback(err);
        })
    })
    .catch(err => {
        helpers.logger.error(`An error occurred in fetching the conference /update-ivr`);
        helpers.logger.error(err);
        return callback(err);
    })

}