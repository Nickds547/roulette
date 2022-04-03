import { ITheory } from "../types/theory";
import * as theoryData from '../data/theory.data';

export const getTheories = async (): Promise<ITheory[]> =>{
    return await theoryData.getAllTheories().catch(err => console.log(err)) || [];
}

export const createTheories = async (theories: ITheory[]): Promise<ITheory[]> =>{
    return await theoryData.createTheories(theories);
}

export const updateTheories = async (theories: ITheory[]): Promise<ITheory[]> =>{
    return await theoryData.updateTheories(theories);
}