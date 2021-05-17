import { v4 as uuid } from "uuid";
import AWS from "aws-sdk";
import createError from "http-errors";
import commonMiddleware from "../../lib/commonMiddleware";
import userSchema from "../../lib/schemas/createUserSchema";

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function createUser(event, context) {
  try {
    const validate = userSchema.validate(event.body);
    if (validate.error) throw validate.error;
  } catch (err) {
    throw new createError.UnprocessableEntity(err);
  }

  const { login, password, name } = event.body;

  const now = new Date();

  const user = {
    id: uuid(),
    name,
    login,
    password,
    createdAt: now.toISOString(),
  };

  try {
    await dynamodb
      .put({
        TableName: process.env.USERS_TABLE_NAME,
        Item: user,
      })
      .promise();
  } catch (error) {
    throw new createError.InternalServerError(error);
  }

  return {
    statusCode: 201,
    body: JSON.stringify(user),
  };
}

export const handler = commonMiddleware(createUser);
