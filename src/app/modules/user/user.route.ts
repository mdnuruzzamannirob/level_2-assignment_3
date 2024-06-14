import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/signup', UserControllers.createUser);
router.get('/');

export const UserRoutes = router;
