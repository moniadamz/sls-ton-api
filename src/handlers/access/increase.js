import { increaseNumberOfAccesses } from "../../services/access";
import commonMiddleware from "../../lib/commonMiddleware";
import { formatResponse } from "../../lib/formatResponse";
const increaseAccess = async () => {
  try {
    const response = await increaseNumberOfAccesses();
    return formatResponse(200, response);
  } catch (error) {
    return formatResponse(400, { error: error.errorMessage || error });
  }
};

export const handler = commonMiddleware(increaseAccess);
