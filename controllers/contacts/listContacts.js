const Contact = require("../../models/contact");

const listContacts = async (req, res) => {
  const { id: owner } = req.user;
  const result = await Contact.find({ owner }, "-createdAt -updatedAt");
  res.json(result);
};

module.exports = listContacts;
