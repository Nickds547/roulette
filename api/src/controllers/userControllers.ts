import * as express from "express";
import { BaseController } from "./baseController";

export class UserLoginController extends BaseController{
    protected executeImpl(req: express.Request, res: express.Response): any{
       try{
            
       } 
       catch(error){
            return this.fail(res, error);
       }
    }
}