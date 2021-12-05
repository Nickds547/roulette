import { model, Schema } from "mongoose";
import { IUser } from "../types/user";

const userSchema: Schema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        }
    },
    {collection: 'Users'}
)

export default model<IUser>("User", userSchema)