import { Router } from 'express'

import UserController from './controllers/UserController'
import BetController from './controllers/BetController'
import AuthController from './controllers/AuthController'

import AuthMiddlewares from './middlewares/auth'

const routes = Router()

//Authentication
routes.post('/authenticate', AuthController.authenticate)

//User
routes.get('/users', UserController.index)
routes.post('/user', UserController.create)

//Bet
routes.post('/bets', AuthMiddlewares.middlewaresValidator, BetController.create)
routes.get('/bets/:userId', AuthMiddlewares.middlewaresValidator, BetController.findById)

export default routes