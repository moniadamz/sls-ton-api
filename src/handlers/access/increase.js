import createError from "http-errors";
import { increaseNumberOfAccesses } from "../../services/increaseAccess";
import commonMiddleware from "../../lib/commonMiddleware";

const increaseAccess = async (event, context) => {
  try {
    const response = await increaseNumberOfAccesses();
    console.log('AQUI OH ----------', response);
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.log(error);
    throw new createError.InternalServerError(error);
  }
};

export const handler = commonMiddleware(increaseAccess);
