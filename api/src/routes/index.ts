import {Router} from 'express';
import { login } from '../controllers/users';
import * as theoryController from '../controllers/theories';
import * as tokenMiddleware from '../middleware/tokenValidator'

const router: Router = Router();

router.post('/login', login)

router.get('/theories', theoryController.getTheories)

router.patch('/theories', tokenMiddleware.validateToken, theoryController.createTheory)

export default router;