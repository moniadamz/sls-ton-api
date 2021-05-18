import createError from "http-errors";
import { getNumberOfAccesses } from "../../services/access";
import commonMiddleware from "../../lib/commonMiddleware";

const getAccesses = async () => {
  try {
    const response = await getNumberOfAccesses();
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.log(error);
    throw new createError.InternalServerError(error.errorMessage);
  }
};

export const handler = commonMiddleware(getAccesses);
