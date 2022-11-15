"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _UserController = require('./controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _BetController = require('./controllers/BetController'); var _BetController2 = _interopRequireDefault(_BetController);
var _AuthController = require('./controllers/AuthController'); var _AuthController2 = _interopRequireDefault(_AuthController);

var _auth = require('./middlewares/auth'); var _auth2 = _interopRequireDefault(_auth);

const routes = _express.Router.call(void 0, )

//Authentication
routes.post('/authenticate', _AuthController2.default.authenticate)

//User
routes.get('/users', _UserController2.default.index)
routes.post('/user', _UserController2.default.create)

//Bet
routes.post('/bets', _auth2.default.middlewaresValidator, _BetController2.default.create)
routes.get('/bets/:userId', _auth2.default.middlewaresValidator, _BetController2.default.findById)

exports. default = routes