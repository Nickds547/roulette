import user from "../schema-models/user";
import { IUser } from "../types/user";

export const getUser = async (username: string): Promise<IUser> =>{
    var dbUser = await user.findOne({username});
    return dbUser;
}