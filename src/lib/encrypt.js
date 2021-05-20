import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);
export const hash = (text) => bcrypt.hashSync(text, salt);
