const ContactController = require("../controllers/contact");

module.exports = (app) => {
  app.post('/contacts', ContactController.create);
  app.get('/contacts', ContactController.listContacts);
  app.get('/contacts/:id', ContactController.findContact);
  app.put('/contacts', ContactController.editContact);

};
