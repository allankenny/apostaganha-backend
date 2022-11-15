import { Schema, model, Document } from 'mongoose'
import { default as bcrypt } from 'bcryptjs'

interface BetInterface extends Document {
  userId: string
  time1?: string
  time2?: string
  betQuote?: string
  hash?: string
  amount?: string
}

const BetSchema = new Schema({
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
  const hash = await bcrypt.hash(this.userId, 10);
  this.hash = hash;
  next()
})

export default model<BetInterface>('Bet', BetSchema)