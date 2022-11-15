"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

const app = _express2.default.call(void 0, )

class App {
  

  constructor(){
    this.express = _express2.default.call(void 0, )
    this.middleware()
    this.database()
    this.routes()

  }

   middleware(){
    this.express.use(_express2.default.json())
    this.express.use(_cors2.default.call(void 0, ))
  }

   database(){
    _mongoose2.default.connect(
      'mongodb+srv://root:schedule@cluster0.m9fiez4.mongodb.net/?retryWrites=true&w=majority',
      {})
      .then(() => console.log('MongoDb is connected'))
      .catch((error)=> console.log(error))
  }

   routes(){
    this.express.use(_routes2.default)

  }

}

exports. default = new App().express