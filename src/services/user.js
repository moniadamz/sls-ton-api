import { getById, getByLogin, insert } from "../lib/dynamoDBConnection";

const USER_TABLE = process.env.USERS_TABLE_NAME;

const getUserById = (id) => getById(id, USER_TABLE);
const getUserByLogin = (login) => getByLogin(login, USER_TABLE);
const insertUser = async (user) => insert(user, USER_TABLE);

export const service = { getUserById, getUserByLogin, insertUser };
