import { IUser } from "../types/user";

export interface IJWTToken {
    exp: number,
    iat: number,
    userAccount: IUser
}