import { compareSync, hash } from 'bcryptjs';

import UserRepository from '../repositories/user/user.repository';
import jwtUtil from '../helpers/jwt.util';
import { User } from '../repositories/user/user.type';


type responseData = {
  data: User | string
}

export default class UserService {
  constructor(
    private repository: UserRepository = new UserRepository()
  ) { }

public async create({ email, password, username }: User): Promise<responseData> {
  const hashPassword = await hash(password, 10);

  const userExists = await this.repository.getUser(email);
  if (userExists) {
    return { data: "Usuário já cadastrado" };
  }

  const newUser = await this.repository.create({ email, password: hashPassword, username });

  const response = {
    email: newUser.email,
    username: newUser.username
  }

  return { data: response as User };
}

public async login({ email, password }: User): Promise<responseData> {


  const userExists = await this.repository.getUser(email);
    if (!userExists) {
    return { data: "Credenciais incorretas" };
  }
  
  const verifyPass = compareSync(password, userExists.password)

		if (!verifyPass) {
    return { data: "Credenciais incorretas" };
		}

  const token = jwtUtil.enter({ id: userExists.id, email: userExists.email });

  const response = {
    email: userExists.email,
    username: userExists.username,
    token: token
  }

  return { data: response as unknown as User };
}
  
}
