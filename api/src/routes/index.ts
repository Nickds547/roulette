import {Router} from 'express';
import { login } from '../controllers/users';
import {getTheories, postTheories} from '../controllers/theories';
import { adminAuthentication } from '../middleware/token-auth.middleware';

const router: Router = Router();

router.post('/login', login)

router.get('/theories', getTheories)

router.post('/theories', adminAuthentication, postTheories)

export default router;