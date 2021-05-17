import { getRequest } from "../lib/axiosRequest";

const { COUNT_API_URL, NAMESPACE, KEY } = process.env;

export const increaseNumberOfAccesses = async () => {
  const endpoint = `${COUNT_API_URL}/hit/${NAMESPACE}/${KEY}`;
  return getRequest(endpoint);
};

