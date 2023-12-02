const express = require("express");

const {listContacts, getContactById} = require("../../controllers");

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", listContacts);

router.get("/:id", isValidId, getContactById);

// router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

// router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrl.updateContactById);

// router.patch("/:id/favorite", isValidId, validateBody(schemas.updateFavoriteSchema), ctrl.updateFavorite);

// router.delete("/:id", isValidId, ctrl.deleteContact);

module.exports = router;
