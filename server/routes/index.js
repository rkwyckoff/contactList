const ContactController = require("../controllers/contact");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

module.exports = (app) => {
  app.post('/contacts', ContactController.create);
  app.get('/contacts', ContactController.listContacts);
  app.get('/contacts/:id', ContactController.findContact);
  app.put('/contacts/:id', ContactController.editContact);
  app.delete('/contacts/:id', ContactController.deleteContact);

};
