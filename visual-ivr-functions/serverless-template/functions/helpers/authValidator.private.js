const Helpers = require(Runtime.getFunctions()['helpers/index'].path)

function authValidator(handlerFn) {
  return async (context, event, callback) => {
    const helpers = new Helpers(context, event)
    try {
      const user = await helpers.auth.validate(context, event)

      if (!user) {
        const response = helpers.twilio.unauthenticatedResponse()
        await helpers.flushLogs()
        callback(null, response)
      }
      if (user !== true) {
        helpers.logger.debug(
          `running for user: ${helpers.stringify(user, null, 2)}`
        )
        helpers.logger.configure({ payload: { person: user } })
      }
      return handlerFn(context, event, callback, helpers)
    } catch (err) {
      helpers.logger.error('error evaluating authorization: ' + err)
      await helpers.flushLogs()
      callback(null, helpers.twilio.unauthenticatedResponse())
    }
  }
}

module.exports = authValidator
