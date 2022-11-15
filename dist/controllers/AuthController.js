"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _User = require('../schemas/User'); var _User2 = _interopRequireDefault(_User);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _authjson = require('../config/auth.json'); var _authjson2 = _interopRequireDefault(_authjson);

class AuthenticateController{constructor() { AuthenticateController.prototype.__init.call(this); }
  
   __init() {this.generateToken = function(params = {}){
    return _jsonwebtoken2.default.sign(params, _authjson2.default.secret, {expiresIn: 86400})
  }}

   async authenticate (req, res){
    
    const { email, password } = req.body

    const user = await _User2.default.findOne({ email })

    if (!user) 
      return res.status(400).json({ error: 'User not found' })

    if (!await _bcryptjs2.default.compare(password, user.password))
      return res.status(400).json({ error: 'invalid password' })

    const token = _jsonwebtoken2.default.sign({id: user.id}, _authjson2.default.secret, {expiresIn: 86400})

    res.send({
      user,
      token: token
    })
  }
}

exports. default = new AuthenticateController()
