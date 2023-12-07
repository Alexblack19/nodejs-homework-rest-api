const express = require("express");

const { validateBody } = require("../../middlewares");

const { registerSchema } = require("../../schemas/user");

const { register } = require("../../controllers/users");

const router = express.Router();

router.post("/register", validateBody(registerSchema), register);

module.exports = router;
