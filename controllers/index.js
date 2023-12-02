const { ctrlWrapper } = require("../helpers");
const listContacts = require("./listContacts");
const getContactById = require("./getContactById");

module.exports = {
    listContacts: ctrlWrapper(listContacts),
    getContactById: ctrlWrapper(getContactById),
    //   addContact: ctrlWrapper(addContact),
    //   updateContactById: ctrlWrapper(updateContactById),
    //   updateFavorite: ctrlWrapper(updateFavorite),
    //   deleteContact: ctrlWrapper(deleteContact),
};
