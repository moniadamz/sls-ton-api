import { getByKey, insert } from "../lib/dynamoDBConnection";

const USER_TABLE = process.env.USERS_TABLE_NAME;

const getUserById = (id) => getByKey(id, USER_TABLE);

const insertUser = (user) => insert(user, USER_TABLE);

export const service = { getUserById, insertUser };
