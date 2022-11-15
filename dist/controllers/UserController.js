"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }


var _AuthController = require('./AuthController'); var _AuthController2 = _interopRequireDefault(_AuthController);

var _User = require('../schemas/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
   async index (req, res) {
    const users = await _User2.default.find()
    return res.json(users)
  }

   async create (req, res) {
    const {email, password, firstName, lastName} = req.body
    try{
      if(await _User2.default.findOne({email}))
        return res.status(400).json({error: 'Email already exists'})

      if(password.length < 1)
        return res.status(400).json({error: 'Cannot create user without password'})

      if(firstName.length < 1)
        return res.status(400).json({error: 'Cannot create user without firstName'})
        
      if(lastName.length < 1)
        return res.status(400).json({error: 'Cannot create user without lastName'})

      const user = await _User2.default.create(req.body)
      
      return res.send({
        user,
        token: _AuthController2.default.generateToken({id: user.id})
      });

    }catch (err){
      return res.status(400).json({ error: 'Registration failed'})
    }
  }

}

exports. default = new UserController()