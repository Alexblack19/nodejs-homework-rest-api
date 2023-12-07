const { ctrlWrapper } = require("../../helpers");
const listContacts = require("./listContacts");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const updateContactById = require("./updateContactById");
const updateFavorite = require("./updateFavorite");
const deleteContact = require("./deleteContact");

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  updateContactById: ctrlWrapper(updateContactById),
  updateFavorite: ctrlWrapper(updateFavorite),
  deleteContact: ctrlWrapper(deleteContact),
};
