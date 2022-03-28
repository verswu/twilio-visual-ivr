const AuthValidator = require(Runtime.getFunctions()['helpers/authValidator']
  .path)

exports.handler = AuthValidator(async function (
  context,
  event,
  callback,
  helpers
) {
  helpers.logger.debug(
    `starting another function session: ${helpers.stringify(event)}`
  )

  const response = helpers.twilio.defaultResponse()

  try {
    // do some things
    let resultObj = { message: 'Hi There' }
    helpers.logger.debug(`a thing was done: ${helpers.stringify(resultObj)}`)
    response.setBody(resultObj)
    // wait for logger to write out
    await helpers.flushLogs()
    callback(null, response)
  } catch (error) {
    helpers.logger.error(
      `unable to complete a thing: ${helpers.stringify(error)}`
    )
    response.setBody(error)
    await helpers.flushLogs()
    callback(response)
  }
})
