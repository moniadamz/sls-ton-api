import commonMiddleware from "../../lib/commonMiddleware";
import { service } from "../../services/user";
import { formatResponse } from "../../lib/formatResponse";
export const getUserById = async (id) => {
  const result = await service.getUserById(id);

  const user = result.Item;

  if (!user) throw `User with ID "${id}" not found!`;
  return user;
};

export const getUser = async (event) => {
  const { id } = event.pathParameters;
  try {
    const user = await getUserById(id);

    return formatResponse(200, user);
  } catch (error) {
    return formatResponse(404, { error });
  }
};

export const handler = commonMiddleware(getUser);
