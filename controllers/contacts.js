const { Contact } = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");

const listContacts = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

// const getContactById = async (req, res) => {
//   const { id } = req.params;
//   const result = await contacts.getContactById(id);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

// const removeContact = async (req, res) => {
//   const { id } = req.params;
//   const result = await contacts.removeContact(id);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json({ message: "contact deleted" });
// };

// const updateContactById = async (req, res) => {
//   const { id } = req.params;
//   const result = await contacts.updateContactById(id, req.body);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  // getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  // removeContact: ctrlWrapper(removeContact),
  // updateContactById: ctrlWrapper(updateContactById),
};
