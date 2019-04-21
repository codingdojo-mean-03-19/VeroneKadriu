const nineteenFiftyFiveController = require('../controllers/1955');

module.exports = function(app) {
  app.get('/', nineteenFiftyFiveController.index);
  app.get('/new/:name', nineteenFiftyFiveController.create);
  app.get('/remove/:name', nineteenFiftyFiveController.destroy);
  app.get('/:name', nineteenFiftyFiveController.show);
};