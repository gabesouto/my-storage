import { UnauthorizedError } from '../helpers/api-exceptions'
import  { Request,Response, NextFunction } from 'express'
import UserRepository from '../repositories/user/user.repository'
import jwtUtil from '../helpers/jwt.util'


export const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try{
	const { authorization } = req.headers

	if (!authorization) {
		throw new UnauthorizedError('Não autorizado')
	}

	const token = authorization.split(' ')[1]
	const data = jwtUtil.decodedToken(token)

	const user = await new UserRepository().getUser(data.email)

	if (!user) {
			throw new UnauthorizedError('Não autorizado')
	}

  	const { password: _, ...loggedUser } = user
  	req.user = loggedUser
  	next()

	} catch(err){
		next(err)
	}


}