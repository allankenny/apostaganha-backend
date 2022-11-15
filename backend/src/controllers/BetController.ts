import { Request, Response } from 'express'
import mongoose from 'mongoose'

import Bet from '../schemas/Bets'
import User from '../schemas/User'

class BetController{  
  public async create(req: Request, res: Response): Promise<Response>{
    const { userId } = req.body
    try{
      console.log(userId);
      if(await User.findOne({ _id: new mongoose.Types.ObjectId(userId)} )){
        const bet = await Bet.create(req.body)
        return res.json(bet);
      }else
        return res.status(400).send({ error : 'User not found'})

    }catch (err){
      return res.status(400).send({ error: 'Registration failed'})
    }
  }

  public async findById(req: Request, res: Response): Promise<Response>{
    const { userId } = req.params
    try{
      // const user = await User.findOne({ _id: new mongoose.Types.ObjectId(userId)}, { firstName: 1, lastName: 1})  
      const bet = await Bet.find({userId})
      return res.json(bet)

    }catch (error){
      return res.status(400).send({ error: 'Unidentified user' })

    }
  }
}

export default new BetController()
