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
      .then(contact => res.status(201).send(contact))
      .catch(error => res.status(400).send(error));
  },
  listContacts (req, res) {
    Contact.findAll({
    })
    .then(contacts => res.status(200).send(contacts))
    .catch(error => res.status(400).send(error));
  },
  findContact (req, res) {
    Contact.findById(req.params.id)
    .then(contacts => res.status(200).send(contacts))
    .catch(error => res.status(400).send(error));
  },
  editContact (req, res) {
    Contact.findById(req.params.id)
    Contact.update({city: contact.city
    })
    .then(contacts => res.status(200).send(contacts))
    .catch(error => res.status(400).send(error));
  }

}
