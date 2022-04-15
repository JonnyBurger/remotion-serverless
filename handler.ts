import { getFunctions, renderMediaOnLambda } from "@remotion/lambda/client";

module.exports.hello = async (event) => {
  const functions = await getFunctions({
    compatibleOnly: true,
    region: "us-east-1",
  });
  const render = await renderMediaOnLambda({
    codec: "h264-mkv",
    serveUrl: "https://quizzical-jackson-ad3285.netlify.app/",
    composition: "react-svg",
    functionName: functions[0].functionName,
    imageFormat: "jpeg",
    inputProps: {},
    maxRetries: 1,
    privacy: "public",
    region: "us-east-1",
  });
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: render,
        input: event,
      },
      null,
      2
    ),
  };
};
