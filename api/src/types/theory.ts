import {Document} from 'mongoose';

export interface ITheory extends Document {
    _id?: string
    sortOrder: number,
    theory: string 
}