const Joi = require("joi");

const registerSchema = Joi.object({
  email: Joi.string().required().messages({
    "any.required": "Missing required email field",
  }),

  password: Joi.string().required().messages({
    "any.required": "Missing required password field",
  }),

  subscription: Joi.string(),
  token: Joi.string(),
});

const loginSchema = Joi.object({
  email: Joi.string().required().messages({
    "any.required": "Missing required email field",
  }),
  password: Joi.string().required().messages({
    "any.required": "Missing required password field",
  }),
});

module.exports = {
  registerSchema,
  loginSchema,
};
