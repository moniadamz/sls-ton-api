import Joi from 'joi';

const schema = Joi.object({
  login: Joi.string().required(),
  password: Joi.string().required(),
  name: Joi.string(),
}).required();

export default schema;
