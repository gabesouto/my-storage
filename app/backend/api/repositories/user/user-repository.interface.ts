import { User } from "./user.type"

export interface UserRepositoryInterface {
   create(req:User): Promise<User | boolean>
   // login(req:User):Promise<User | string>
}