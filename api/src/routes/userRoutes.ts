import * as express from 'express';
import { userController } from '../controllers';

export const userRouter = express.Router({mergeParams: true});

userRouter.get('/login', () => console.log("In Login Route"))

userRouter.get("*", () => console.log("In Default Route"))
