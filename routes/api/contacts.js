const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.listContacts);

// router.get("/:id", ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

// router.delete("/:id", ctrl.removeContact);

// router.put("/:id", validateBody(schemas.addSchema), ctrl.updateContactById);

module.exports = router;
