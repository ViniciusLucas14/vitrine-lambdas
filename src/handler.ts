export async function authorize(event) {
  const requestUri = "https://api.backblazeb2.com/b2api/v2/b2_authorize_account";
  const keyId = process.env.BACKBLAZE_KEY_ID;
  const applicationKey = process.env.BACKBLAZE_APPLICATION_KEY;
  const text = Buffer.from(`${keyId}:${applicationKey}`, 'utf8').toString('base64');
  const authorizationHeader = `Basic ${text}`;

  const response = await fetch(requestUri, {
    headers: {
      Authorization: authorizationHeader,
    },
  });
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: data,
    }),
  };

};
