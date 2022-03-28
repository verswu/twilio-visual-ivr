# serverless-template

## Dependencies

Make sure to install the twilio cli and serverless cli plugin

```bash
brew install twilio
twilio plugins:install @twilio-labs/plugin-serverless
```

## Setup .env files

Setup environment files per environment

Take advantage of multiple environments (.env.stage, .env.prod, etc)

```bash
cp env.sample .env.stage
```

Populate sample environment file with accurate values for current twilio project

## Deploy serverless project

```bash
#Populate environment values (switch out .env for .env.stage, .env.prod, etc)
twilio serverless:deploy --env .env
```

# Best Practices

Visibility [here](https://www.twilio.com/docs/runtime/functions-assets-api/api/understanding-visibility-public-private-and-protected-functions-and-assets)

Keep library specific functionality within helpers

Keep reusable chunks within shared

Use logging to your advantage. Overly log on debug to be able to troubleshoot in production

Some additional logging best practices [here](https://blog.bitsrc.io/logging-best-practices-for-node-js-applications-8a0a5969b94c)

Lambda best practices [here](https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html)
