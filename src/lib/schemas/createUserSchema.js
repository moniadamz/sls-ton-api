import Joi from 'joi';
import createError from "http-errors";

const schema = Joi.object({
  login: Joi.string().required(),
  password: Joi.string().required(),
  name: Joi.string(),
}).required();

const validate = async (body) => {
  try {
    const validate = schema.validate(body);
    if (validate.error) throw validate.error;
  } catch (err) {
    throw new createError.UnprocessableEntity(err);
  }
};

export const validateSchema = validate;
