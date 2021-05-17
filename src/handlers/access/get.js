import createError from "http-errors";
import  { getNumberOfAccesses } from "../../services/getAccess";
import commonMiddleware from "../../lib/commonMiddleware";

const getAccesses = async (event, context) => {
  try {
    const response = await getNumberOfAccesses();
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
      throw new createError.InternalServerError(error);
  }
};

export const handler = commonMiddleware(getAccesses);
