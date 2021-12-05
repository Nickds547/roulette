import {Document} from 'mongoose';

export interface ITheory extends Document {
    sortOrder: number,
    theory: string 
}