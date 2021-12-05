import { ITheory } from "../types/theory";
import * as theoryData from '../data/theory.data';

export const getTheories = async (): Promise<ITheory[]> =>{
    return await theoryData.getAllTheories().catch(err => console.log(err)) || [];
}