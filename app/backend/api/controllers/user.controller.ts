import { NextFunction, Request, Response } from 'express';
import UserService from '../service/user.service';
import { HTTPStatus } from './http-status.enum';
import { BadRequestError } from '../helpers/api-exceptions';

export default class UserController {
  constructor(
    private userService: UserService = new UserService(),
  ) { }

  public async create (req: Request, res: Response, next: NextFunction)  {

    try{

    const user = await this.userService.create(req.body);
  
    if(user.data === 'Usuário já cadastrado'){
      throw new BadRequestError(user.data);
    }

    res.status(HTTPStatus.CREATED).json(user.data);

        } catch(err) {
          next(err)
  }
  
  }

  public async login(req: Request, res: Response, next: NextFunction){
    
    try{

    const user = await this.userService.login(req.body);
  
    if(user.data === 'Credenciais incorretas'){
      throw new BadRequestError(user.data);
    }

    res.status(HTTPStatus.OK).json(user.data);

      } catch(err) {
        next(err)
  }
  
  }
}