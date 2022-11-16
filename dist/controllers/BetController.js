"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

var _Bets = require('../schemas/Bets'); var _Bets2 = _interopRequireDefault(_Bets);
var _User = require('../schemas/User'); var _User2 = _interopRequireDefault(_User);

class BetController{  
   async create(req, res){
    const { userId } = req.body
    try{
      if(await _User2.default.findOne({ _id: new _mongoose2.default.Types.ObjectId(userId)} )){
        const bet = await _Bets2.default.create(req.body)
        return res.json(bet);
      }else
        return res.status(400).send({ error : 'User not found'})

    }catch (err){
      return res.status(400).send({ error: 'Registration failed'})
    }
  }

   async findById(req, res){
    const { userId } = req.params
    try{
      // const user = await User.findOne({ _id: new mongoose.Types.ObjectId(userId)}, { firstName: 1, lastName: 1})  
      const bet = await _Bets2.default.find({userId})
      return res.json(bet)

    }catch (error){
      return res.status(400).send({ error: 'Unidentified user' })

    }
  }
}

exports. default = new BetController()
