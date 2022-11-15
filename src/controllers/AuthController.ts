import { Request, Response} from 'express'
import User from '../schemas/User'
import { default as bcrypt } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import authConfig from '../config/auth.json'

class AuthenticateController{
  
  public generateToken = function(params = {}){
    return jwt.sign(params, authConfig.secret, {expiresIn: 86400})
  }

  public async authenticate (req: Request, res: Response): Promise<any>{
    
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) 
      return res.status(400).json({ error: 'User not found' })

    if (!await bcrypt.compare(password, user.password))
      return res.status(400).json({ error: 'invalid password' })

    const token = jwt.sign({id: user.id}, authConfig.secret, {expiresIn: 86400})

    res.send({
      user,
      token: token
    })
  }
}

export default new AuthenticateController()
