import createError from "http-errors";
import { increaseNumberOfAccesses } from "../../services/access";
import commonMiddleware from "../../lib/commonMiddleware";

const increaseAccess = async (event, context) => {
  try {
    const response = await increaseNumberOfAccesses();
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.log(error);
    throw new createError.InternalServerError(error.errorMessage);
  }
};

export const handler = commonMiddleware(increaseAccess);
