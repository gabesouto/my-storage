import { User } from "./user.type";
import SequelizeUser from "../../models/user.model"

export default class UserRepository {
   private model = SequelizeUser

   public async create({email, password, username}:User): Promise<User> {
       const newUser = await this.model.create({
         email, password, username
      }) 

      return newUser

   }

   public async getUser(email: string){
       return await this.model.findOne({where: { email}})
   }

   public async login(req:User){
   const user = this.model.findOne({where: { email: req.email}})

   if(user) return user
   return "user not found"
   }
}