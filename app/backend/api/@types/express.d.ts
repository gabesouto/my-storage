import { User } from "../repositories/user/user.type"

declare global {
	namespace Express {
		export interface Request {
			user: Partial<User>
		}
	}
}