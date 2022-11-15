import {Request, Response, NextFunction, RequestHandler} from 'express'
import jwt from 'jsonwebtoken'
import authConfig from '../config/auth.json'

class AuthMiddleware{

  public middlewaresValidator:RequestHandler = (req: Request, res: Response, next: NextFunction) =>{
    const authHeader = req.headers.authorization

    if(!authHeader)
      return res.status(401).send({error: 'No token provided'})

    const parts = authHeader.split(' ')

    if(parts.length !== 2)
      return res.status(401).send({error: 'Malformed token'})

    const [scheme, token] = parts

    if(!/^Bearer$/i.test(scheme))
      return res.status(401).send({error: 'Malformed token'})

    jwt.verify(token, authConfig.secret, (err, decoded)=>{
      if(err)
        return res.status(401).send({error: 'Token invalid'})
      
      // console.log(decoded)
      // req.userId = decoded.id

      return next()
    })

  }
}

export default new AuthMiddleware()

