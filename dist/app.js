"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
_dotenv2.default.config()
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

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
      process.env.MONGO_URL || "",
      {})
      .then(() => console.log('MongoDb is connected!'))
      .catch((error)=> console.log(error))
  }

   routes(){
    this.express.use(_routes2.default)

  }

}

exports. default = new App().express