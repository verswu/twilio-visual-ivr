'use strict'
const functions = Runtime.getFunctions() //eslint-disable-line no-undef

class Helpers {
  constructor(context, event) {
    /*
     * Load Logger Helper Methods
     */
    const loggerPath = functions['helpers/logger'].path
    const loggerLib = require(loggerPath).LoggerLib
    this.logger = new loggerLib(context, event)

    this.flushLogs = () => {
      return new Promise((resolve) => {
        this.logger.wait(resolve)
      })
    }

    /*
     * Load Auth Helper Methods
     */
    const authPath = functions['helpers/auth'].path
    const authLib = require(authPath).AuthHelper
    this.auth = new authLib(this.logger)

    /*
     * Load Twilio Helper Methods
     */
    const twilioPath = functions['helpers/twilio'].path
    const twilioLib = require(twilioPath).TwilioHelper
    this.twilio = new twilioLib(this.logger)

    /*
     * Load SMS Helper Methods
     */
    const smsPath = functions['helpers/sms'].path
    const smsLib = require(smsPath).SmsHelper
    this.sms = new smsLib(this.logger)

    /*
     * Load Conversation Helper Methods
     */
    const convPath = functions['helpers/conversations'].path
    const convLib = require(convPath).ConversationsHelper
    this.conversations = new convLib(this.logger)
  }

  stringify(obj) {
    return JSON.stringify(obj, null, 2)
  }
}

/** @module helpers */
module.exports = Helpers
