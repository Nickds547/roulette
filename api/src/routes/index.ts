import {Router} from 'express';
import { login } from '../controllers/users';
import {getTheories} from '../controllers/theories';

const router: Router = Router();

router.post('/login', login)

router.get('/theories', getTheories)

export default router;