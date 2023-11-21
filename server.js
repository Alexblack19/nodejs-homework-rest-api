const app = require("./app");

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000");
});

// ==========================================
// const contacts = require("./models/contacts");
// async function invokeAction() {  
//       const allContacts = await contacts.listContacts();
//       return console.table(allContacts);
// }
// invokeAction()
