import { model, Schema } from "mongoose";
import { ITheory } from "../types/theory";


const theorySchema: Schema = new Schema(
    {
        sortOrder: {
            type: Number,
            required: true
        },
        theory: {
            type: String,
            required: true
        }
    },
    {collection: 'Theory'}
)

export default model<ITheory>("Theory", theorySchema)