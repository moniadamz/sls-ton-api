import { v4 as uuid } from "uuid";
import commonMiddleware from "../../lib/commonMiddleware";
import { formatResponse } from "../../lib/formatResponse";
import { validateSchema } from "../../lib/schemas/createUserSchema";
import { service } from "../../services/user";
import _ from 'lodash';

const createUser = async (event) => {
    try {
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

      const response = await service.getUserByLogin(login);
      if (response.Items.length)
        return formatResponse(409, { error: "This login already exists." });

      await service.insertUser(user);

      return formatResponse(201, _.omit(user, "password"));
    } catch (error) {
      return formatResponse(400, { error: error.errorMessage || error });
    }
};

export const handler = commonMiddleware(createUser);
