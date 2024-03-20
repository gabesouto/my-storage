import { User } from "./api/repositories/user/user.type"

declare global {
	namespace Express {
		 interface Request{
			  user: Partial<User>
		 }
	}
}