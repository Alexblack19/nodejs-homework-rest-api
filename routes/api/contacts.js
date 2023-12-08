const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { bodySchema, updateFavoriteSchema } = require("../../schemas/contact");

const router = express.Router();

router.get("/", authenticate, ctrl.listContacts);

router.get("/:id", authenticate, isValidId, ctrl.getContactById);

router.post("/", authenticate, validateBody(bodySchema), ctrl.addContact);

router.put("/:id", authenticate, isValidId, validateBody(bodySchema), ctrl.updateContactById);

router.patch("/:id/favorite", authenticate, isValidId, validateBody(updateFavoriteSchema), ctrl.updateFavorite);

router.delete("/:id", authenticate, isValidId, ctrl.deleteContact);

module.exports = router;
