import { Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import authConfig from '../config/auth.json'
import AuthController from './AuthController'

import User from '../schemas/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()
    return res.json(users)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const {email, password, firstName, lastName} = req.body
    try{
      if(await User.findOne({email}))
        return res.status(400).json({error: 'Email already exists'})

      if(password.length < 1)
        return res.status(400).json({error: 'Cannot create user without password'})

      if(firstName.length < 1)
        return res.status(400).json({error: 'Cannot create user without firstName'})
        
      if(lastName.length < 1)
        return res.status(400).json({error: 'Cannot create user without lastName'})

      const user = await User.create(req.body)
      
      return res.send({
        user,
        token: AuthController.generateToken({id: user.id})
      });

    }catch (err){
      return res.status(400).json({ error: 'Registration failed'})
    }
  }

}

export default new UserController()