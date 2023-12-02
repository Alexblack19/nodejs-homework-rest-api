const express = require("express");

const {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  updateFavorite,
  deleteContact,
} = require("../../controllers");

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", listContacts);

router.get("/:id", isValidId, getContactById);

router.post("/", validateBody(schemas.addSchema), addContact);

router.put("/:id", isValidId, validateBody(schemas.addSchema), updateContactById);

router.patch("/:id/favorite", isValidId, validateBody(schemas.updateFavoriteSchema), updateFavorite);

router.delete("/:id", isValidId, deleteContact);

module.exports = router;
