import { Router } from 'express';

import login from '../controllers/Login';

const loginRouter = Router();

loginRouter.post('/', login);

export default loginRouter;