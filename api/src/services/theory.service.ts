import { ITheory } from "../types/theory";
import * as theoryData from '../data/theory.data';

export const getTheories = async (): Promise<ITheory[]> =>{
    return await theoryData.getAllTheories().catch(err => console.log(err)) || [];
}

export const createOrUpdateTheories = async (theories: Array<ITheory>): Promise<ITheory[]> =>{
    var newTheories = theories.filter(c => c._id === null || c._id === undefined);

    var allTheories = await getTheories();
    var toUpdate = theories.filter((b) => allTheories.find(c => c._id.valueOf() === b._id) !== undefined)

    var theoryArray: ITheory[] = [];
    try{
        
        if(newTheories.length > 0)
            theoryArray = await theoryData.createTheories(newTheories);

        console.log("Array after create: ", theoryArray)
        for(const theory of toUpdate){
            var updatedTheory = await theoryData.updateTheory(theory)
            theoryArray.push(updatedTheory);
        }
    }
    catch(error){
        throw error
    }

    console.log("Before return")
    return theoryArray.sort((a,b) =>{
        if(a.sortOrder < b.sortOrder)
            return -1;
        if(a.sortOrder > b.sortOrder)
            return 1
        
        return 0
    })
}