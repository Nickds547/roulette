import user from "../schema-models/user";
import { IUser } from "../types/user";

export const getUserByUserNameAsync = async (username: string): Promise<IUser> =>{
    var dbUser = await user.findOne({username});
    return dbUser;
}

export const getUserByIdAsync = async (id: string): Promise<IUser> => {
    var dbUser = await user.findById(id);
    return dbUser;
}