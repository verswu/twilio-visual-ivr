class ConversationsHelper {
  constructor(logger) {
    this.logger = logger

    //have webhooks enabled so frontline service can add timers and friendly_names to participants
    this.xTwilioWebhookEnabled = true
  }

  /**
   * @param {twilio.Client} twilioClient
   * @param {string} friendlyName
   * @param {Object} attributes
   * @returns {Promise}
   */
  createConversation(twilioClient, friendlyName, attributes) {
    return twilioClient.conversations.conversations.create({
      friendlyName,
      attributes,
      xTwilioWebhookEnabled: this.xTwilioWebhookEnabled,
    })
  }

  /**
   * @param {twilio.Client} twilioClient
   * @param {string} conversationSid
   * @param {string} address - Participants phone number, whatsapp, etc
   * @param {string} proxyAddress - Twilio number to use to manage conversation
   * @param {Object} attributes - attributes to add to the participant object
   * @returns {Promise}
   */
  addNonChatParticipant(
    twilioClient,
    conversationSid,
    address,
    proxyAddress,
    attributes
  ) {
    this.logger.debug(
      `adding new participant ${address} proxied ${proxyAddress} with attributes ${JSON.stringify(
        attributes
      )}`
    )
    return twilioClient.conversations
      .conversations(conversationSid)
      .participants.create({
        'messagingBinding.address': address,
        'messagingBinding.proxyAddress': proxyAddress,
        attributes,
        xTwilioWebhookEnabled: this.xTwilioWebhookEnabled,
      })
  }

  /**
   * @param {twilio.Client} twilioClient
   * @param {string} conversationSid
   * @param {string} identity - Workers chat service identity
   * @param {Object} attributes - attributes to add to the participant object
   * @returns {Promise}
   */
  addParticipant(twilioClient, conversationSid, identity, attributes) {
    this.logger.debug(
      `adding new participant ${identity} with attributes ${JSON.stringify(
        attributes
      )}`
    )
    return twilioClient.conversations
      .conversations(conversationSid)
      .participants.create({
        identity,
        attributes,
        xTwilioWebhookEnabled: this.xTwilioWebhookEnabled,
      })
  }

  /**
   * @param {twilio.Client} twilioClient
   * @param {string} conversationSid
   * @param {string} body
   * @param {string} author
   * @returns {Promise}
   */
  sendChannelMessage(twilioClient, conversationSid, body, author) {
    this.logger.debug(
      `sending conversation ${conversationSid} channel message ${body} as author ${author}`
    )
    return twilioClient.conversations
      .conversations(conversationSid)
      .messages.create({
        body,
        author,
        xTwilioWebhookEnabled: this.xTwilioWebhookEnabled,
      })
  }

  /**
   * @param {twilio.Client} twilioClient
   * @param {string} conversationSid
   * @param {string} participantSid
   * @returns {Promise}
   */
  removeParticipant(twilioClient, conversationSid, participantSid) {
    this.logger.debug(`removing participant ${participantSid}`)
    return twilioClient.conversations
      .conversations(conversationSid)
      .participants(participantSid)
      .remove()
  }

  /**
   * @param {twilio.Client} twilioClient
   * @param {string} conversationSid
   * @param {string} state - active, inactive, or closed
   * @returns {Promise}
   */
  updateState(twilioClient, conversationSid, state) {
    this.logger.debug(
      `updating conversation ${conversationSid} to new state ${state}`
    )
    return twilioClient.conversations
      .conversations(conversationSid)
      .update({ state, xTwilioWebhookEnabled: this.xTwilioWebhookEnabled })
  }

  /**
   * @param {twilio.Client} twilioClient
   * @param {string} conversationSid
   * @returns {Promise}
   */
  endConversation(twilioClient, conversationSid) {
    this.logger.debug(`ending conversation ${conversationSid}`)
    return twilioClient.conversations.conversations(conversationSid).remove()
  }
}

/** @module conversationsHelper */
module.exports = {
  ConversationsHelper,
}
