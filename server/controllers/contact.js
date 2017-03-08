const Contact = require('../models').Contact;

module.exports = {
  create(req, res) {
    return Contact
      .create({
        name: req.body.name,
        phone: req.body.phone,
        city: req.body.city,
        state: req.body.state,
        photo_url: req.body.photo_url,
        email: req.body.email


      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
};
