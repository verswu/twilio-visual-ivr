class TwilioHelper {
  constructor(logger) {
    this.logger = logger
  }

  defaultResponse() {
    const response = this._defaultResponse()
    return response
  }

  okResponse(body) {
    const response = this._defaultResponse()
    response.setStatusCode(200)
    response.setBody(body)
    return response
  }

  badRequestResponse(body) {
    const response = this._defaultResponse()
    response.setStatusCode(400)
    response.setBody(body)
    return response
  }

  unauthenticatedResponse(body) {
    const response = this._defaultResponse()
    response.setStatusCode(401)
    response.setBody(body)
    return response
  }

  forbiddenResponse(body) {
    const response = this._defaultResponse()
    response.setStatusCode(403)
    response.setBody(body)
    return response
  }

  errorResponse(body) {
    const response = this._defaultResponse()
    response.setStatusCode(500)
    response.setBody(body)
    return response
  }

  _defaultResponse() {
    const response = new Twilio.Response()
    response.appendHeader('Access-Control-Allow-Origin', '*')
    response.appendHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    response.appendHeader('Access-Control-Allow-Headers', 'Content-Type')
    response.appendHeader('Content-Type', 'application/json')
    return response
  }

  createClient(context) {
    const { ACCOUNT_SID, AUTH_TOKEN } = context
    return require('twilio')(ACCOUNT_SID, AUTH_TOKEN, {
      lazyLoading: true,
    })
  }
}

/** @module twilioHelper */
module.exports = {
  TwilioHelper,
}
