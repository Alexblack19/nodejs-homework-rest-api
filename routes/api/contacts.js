const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");

const { bodySchema, updateFavoriteSchema } = require("../../schemas/contact");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:id", isValidId, ctrl.getContactById);

router.post("/", validateBody(bodySchema), ctrl.addContact);

router.put("/:id", isValidId, validateBody(bodySchema), ctrl.updateContactById);

router.patch("/:id/favorite", isValidId, validateBody(updateFavoriteSchema), ctrl.updateFavorite);

router.delete("/:id", isValidId, ctrl.deleteContact);

module.exports = router;
