var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


const RegistrationController = require('../controllers/Registration');

router.get('/api/Registration', RegistrationController.list);
router.get('/api/Registration/:id', RegistrationController.getById);
module.exports = router;