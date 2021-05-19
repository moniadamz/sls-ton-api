export const formatResponse = (code, body) => {
  console.log(body);
  return {
    statusCode: code,
    body: JSON.stringify(body),
  };
};
