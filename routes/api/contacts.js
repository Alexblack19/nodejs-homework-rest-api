const express = require("express");

const {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  updateFavorite,
  deleteContact,
} = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");

const { bodySchema, updateFavoriteSchema } = require("../../schemas/contact");

const router = express.Router();

router.get("/", listContacts);

router.get("/:id", isValidId, getContactById);

router.post("/", validateBody(bodySchema), addContact);

router.put("/:id", isValidId, validateBody(bodySchema), updateContactById);

router.patch("/:id/favorite", isValidId, validateBody(updateFavoriteSchema), updateFavorite);

router.delete("/:id", isValidId, deleteContact);

module.exports = router;
