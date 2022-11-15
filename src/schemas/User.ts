import { Schema, model, Document } from 'mongoose'
import { default as bcrypt } from 'bcryptjs'

interface UserInterface extends Document {
  email: string
  password: string
  firstName?: string
  lastName?: string
}

const UserSchema = new Schema({
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
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next()
})

export default model<UserInterface>('User', UserSchema)