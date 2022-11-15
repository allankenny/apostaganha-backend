"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose');
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);










const BetSchema = new (0, _mongoose.Schema)({
  userId: {
    type: String,
    required: true,
  },
  time1: {
    type: String,
  },
  time2: {
    type: String,
  },
  betQuote:{
    type: String,
  },
  hash: {
    type: String,
  },
  amount: {
    type: String,
  }
}, {
  timestamps: true
})

BetSchema.pre('save', async function(next){
  const hash = await _bcryptjs2.default.hash(this.userId, 10);
  this.hash = hash;
  next()
})

exports. default = _mongoose.model('Bet', BetSchema)