const Joi = require("joi"); // Joi перевіряє дані, які приходять з frontend

const bodySchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Missing required name field",
  }),
  email: Joi.string().required().messages({
    "any.required": "Missing required email field",
  }),
  phone: Joi.string().required().messages({
    "any.required": "Missing required phone field",
  }),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required().messages({ "any.required": "Missing field favorite" }),
});

module.exports = {
  bodySchema,
  updateFavoriteSchema,
};
