"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _authjson = require('../config/auth.json'); var _authjson2 = _interopRequireDefault(_authjson);

class AuthMiddleware{constructor() { AuthMiddleware.prototype.__init.call(this); }

   __init() {this.middlewaresValidator = (req, res, next) =>{
    const authHeader = req.headers.authorization

    if(!authHeader)
      return res.status(401).send({error: 'No token provided'})

    const parts = authHeader.split(' ')

    if(parts.length !== 2)
      return res.status(401).send({error: 'Malformed token'})

    const [scheme, token] = parts

    if(!/^Bearer$/i.test(scheme))
      return res.status(401).send({error: 'Malformed token'})

    _jsonwebtoken2.default.verify(token, _authjson2.default.secret, (err, decoded)=>{
      if(err)
        return res.status(401).send({error: 'Token invalid'})
      
      // console.log(decoded)
      // req.userId = decoded.id

      return next()
    })

  }}
}

exports. default = new AuthMiddleware()

