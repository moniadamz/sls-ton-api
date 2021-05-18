import { v4 as uuid } from "uuid";
import createError from "http-errors";
import commonMiddleware from "../../lib/commonMiddleware";
import { validateSchema } from '../../lib/schemas/createUserSchema';
import { service } from "../../services/user";

const createUser = async (event, context) => {
  await validateSchema(event.body);

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
    await service.insertUser(user);
  } catch (error) {
    console.log(error);
    throw new createError.InternalServerError(error.errorMessage);
  }

  return {
    statusCode: 201,
    body: JSON.stringify(user),
  };
};

export const handler = commonMiddleware(createUser);
