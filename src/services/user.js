import { getById, getByLogin, insert } from "../lib/dynamoDBConnection";
import { hash } from "../lib/encrypt";

const USER_TABLE = process.env.USERS_TABLE_NAME;

const getUserById = (id) => getById(id, USER_TABLE);
const getUserByLogin = (login) => getByLogin(login, USER_TABLE);
const insertUser = async (user) => insert(user, USER_TABLE);
const encryptPassword = (password) => hash(password);

export const service = { getUserById, getUserByLogin, insertUser, encryptPassword };
