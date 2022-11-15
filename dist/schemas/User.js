"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose');
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);








const UserSchema = new (0, _mongoose.Schema)({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  }
}, {
  timestamps: true
})

UserSchema.pre('save', async function(next){
  const hash = await _bcryptjs2.default.hash(this.password, 10);
  this.password = hash;
  next()
})

exports. default = _mongoose.model('User', UserSchema)