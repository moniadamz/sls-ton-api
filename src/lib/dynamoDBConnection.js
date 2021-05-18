import AWS from "aws-sdk";
const dynamodb = new AWS.DynamoDB.DocumentClient();

const getByKey = (key, table) =>
  dynamodb
    .get({
      TableName: table,
      Key: { id: key },
    })
    .promise();

const insert = (data, table) =>
  dynamodb
    .put({
      TableName: table,
      Item: data,
    })
    .promise();
export { getByKey, insert };
