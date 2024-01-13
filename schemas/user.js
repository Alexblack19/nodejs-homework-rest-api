const Joi = require("joi"); // Joi перевіряє дані, які приходять з frontend
const emailRegexp = require("../constants/emailRegexp");

const registerSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": "Missing required email field",
  }),

  password: Joi.string().required().messages({
    "any.required": "Missing required password field",
  }),

  subscription: Joi.string(),
  token: Joi.string(),
});

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": "Missing required field email",
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": "Missing required email field",
  }),
  password: Joi.string().required().messages({
    "any.required": "Missing required password field",
  }),
});

module.exports = {
  registerSchema,
  emailSchema,
  loginSchema,
};
