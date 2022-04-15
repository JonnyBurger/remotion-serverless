# Remotion Serverless Demo Framework

This is a minimal example of how to trigger a [Remotion Lambda](https://v3.remotion.dev/docs/lambda) render from Serverless framework.

To reproduce:

```console
npm i -g serverless
```

Follow the [Remotion Lambda setup](https://v3.remotion.dev/docs/lambda/setup), then create a .env file:

```
AWS_ACCESS_KEY_ID=<AWS access tokem>
AWS_SECRET_ACCESS_KEY=<AWS secret>
AWS_REGION=us-east-1

```

Start server locally:

```console
serverless offline --httpPort 8080 --verbose
```

Call the function:

```console
aws lambda invoke /dev/null --endpoint-url http://localhost:3002 \
    --function-name remotion-serverless-dev-hello
```
