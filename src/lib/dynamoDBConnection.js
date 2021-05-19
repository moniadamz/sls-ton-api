import AWS from "aws-sdk";
const dynamodb = new AWS.DynamoDB.DocumentClient();

const getById = (id, table) =>
  dynamodb
    .get({
      TableName: table,
      Key: { id },
    })
    .promise();

const getByLogin = (login, table) =>
  dynamodb
    .query({
      TableName: table,
      IndexName: "login",
      KeyConditionExpression: "login = :login",
      ExpressionAttributeValues: {
        ":login": login,
      },
    })
    .promise();

const insert = (data, table) =>
  dynamodb
    .put({
      TableName: table,
      Item: data,
    })
    .promise();
export { getById, getByLogin, insert };
