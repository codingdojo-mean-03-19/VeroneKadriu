const Person = require('mongoose').model('Person');

module.exports = {
  index(request, response) {
    Person.find({})
      .then(people => response.json(people))
      .catch(error => response.json(error));
  },
  show(request, response) {
    Person.findOne(request.params)
      .then(person => {
        response.json(person ? person : 'No such person existed in 1955!!');
      })
      .catch(error => response.json(error));
  },
  create(request, response) {
    Person.create(request.params)
      .then(person => response.json(person))
      .catch(error => response.json(error));
  },
  destroy(request, response) {
    Person.remove(request.params)
      .then(result => response.json(result))
      .catch(error => response.json(error));
  },
};