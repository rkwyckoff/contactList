const ContactController = require("../controllers/contact");

module.exports = (app) => {
  app.post('/contacts', ContactController.create);
};





  
