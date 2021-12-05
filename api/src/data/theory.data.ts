import theory from '../schema-models/theory';
import { ITheory } from "../types/theory";


export const getAllTheories = async (): Promise<ITheory[]> =>{
    return await theory.find();
}