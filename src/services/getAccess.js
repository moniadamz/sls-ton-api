import { getRequest } from "../lib/axiosRequest";

const { COUNT_API_URL, NAMESPACE, KEY } = process.env;

export const getNumberOfAccesses = async (event, context) => {
  const endpoint = `${COUNT_API_URL}/get/${NAMESPACE}/${KEY}`;
  return getRequest(endpoint);
};

