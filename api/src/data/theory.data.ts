import theory from '../schema-models/theory';
import { ITheory } from "../types/theory";


export const getAllTheories = async (): Promise<ITheory[]> =>{
    return await theory.find().sort({sortOrder: -1});
}

export const createTheories = async (theories: ITheory[]): Promise<ITheory[]> =>{
   return theory.insertMany(theories);
}

export const updateTheories = async (thoeries: ITheory[]): Promise<ITheory[]> => {
    var ops = [];

    thoeries.forEach(theory => {
        ops.push(
            {
                updateOne: {
                    filter: {_id: theory._id},
                    update: {
                        $set: {sortOrder: theory.sortOrder, theory: theory.theory}
                    }
                }
            }
        )
    })

    await theory.bulkWrite(ops);

     var theories = getAllTheories();
     return theories;
}