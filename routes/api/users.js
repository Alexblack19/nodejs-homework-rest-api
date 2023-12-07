const express = require("express");

const { validateBody } = require("../../middlewares");

const { registerSchema } = require("../../schemas/user");

const ctrl = require("../../controllers/users");

const router = express.Router();

router.post("/register", validateBody(registerSchema), ctrl.register);

module.exports = router;
