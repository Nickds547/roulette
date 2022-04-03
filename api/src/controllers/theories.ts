import {Response, Request} from 'express';
import * as theoryService from '../services/theory.service';
import { ITheory } from '../types/theory';

export const getTheories =  async (req: Request, res: Response): Promise<void> =>{
    try{
        var theories = await theoryService.getTheories();

       res.status(200).send(theories);

    }catch(error){
        res.send(500).send(error)
        throw error;
    }
}

export const postTheories = async (req: Request, res: Response): Promise<void> => {
    try {
        var theories: Array<ITheory> = req.body.theories;
        var theoriesToEdit = theories.filter(c => c._id !== null || c._id !== undefined);
        var newTheories = theories.filter(c => c._id === null || c._id === undefined);

        await theoryService.createTheories(newTheories);
        await theoryService.updateTheories(theoriesToEdit);

        var allTheories = await theoryService.getTheories();

        res.status(200).send(allTheories);

    }
    catch(error){
        res.status(500).send("Error creating theories " + error)
    }
}