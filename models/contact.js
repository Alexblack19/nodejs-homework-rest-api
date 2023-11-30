const { Schema, model } = require("mongoose"); // Mongoose перевіряє дані, які зберігаємо в базі даних. Перевіряє те, що ми хочемо зберегти

const Joi = require("joi"); // Joi перевіряє дані, які приходять з бази даних. Перевіряє те що прийшло

const { handleMongooseError } = require("../helpers");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true },
);

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `missing required name field`,
  }),
  email: Joi.string().required().messages({
    "any.required": `missing required email field`,
  }),
  phone: Joi.string().required().messages({
    "any.required": `missing required phone field`,
  }),
  favorite: Joi.boolean(),
});

contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);

const schemas = {
  addSchema,
};

module.exports = {
  Contact,
  schemas,
};
