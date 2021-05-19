import Joi from "joi";

const schema = Joi.object({
  login: Joi.string().min(1).max(10).required(),
  password: Joi.string().min(6).max(16).required(),
  name: Joi.string().min(3).max(50).required(),
}).required();

const validate = async (body) => {
  try {
    const validate = schema.validate(body);
    if (validate.error) throw validate.error;
  } catch (error) {
    throw error.details[0].message;
  }
};

export const validateSchema = validate;
