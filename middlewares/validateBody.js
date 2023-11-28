const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = await addSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  };
};
