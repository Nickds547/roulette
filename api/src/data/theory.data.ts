import theorySchema from '../schema-models/theory';
import { ITheory } from "../types/theory";


export const getAllTheories = async (): Promise<ITheory[]> =>{
    return await theorySchema.find();
}

export const createTheories = async (theories: ITheory[]): Promise<ITheory[]> =>{
  return await theorySchema.insertMany(theories)
}

export const updateTheory = async (theory: ITheory): Promise<ITheory> =>{
    console.log("Theory Id in data: ", theory._id)
    return await theorySchema.findOneAndUpdate(
        {id: theory._id},
        {theory: theory.theory, soryOrder: theory.sortOrder}
    )
}