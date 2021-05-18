import commonMiddleware from "../../lib/commonMiddleware";
import createError from "http-errors";
import { service } from "../../services/user";

export const getUserById = async (id) => {
  let user;

  try {
    const result = await service.getUserById(id);

    user = result.Item;
  } catch (error) {
    console.error(error);
    throw new createError.InternalServerError(error.errorMessage);
  }

  if (!user) {
    throw new createError.NotFound(`User with ID "${id}" not found!`);
  }

  return user;
};

export const getUser = async (event, context) => {
  const { id } = event.pathParameters;
  const user = await getUserById(id);
  return {
    statusCode: 200,
    body: JSON.stringify(user),
  };
};

export const handler = commonMiddleware(getUser);
