import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import TaskController from './app/controllers/TaskController';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // All routes below this middleware must be authenticated

routes.put('/users', UserController.update);

routes.post('/tasks', TaskController.store);

routes.get('/tasks', TaskController.index);

routes.put('/tasks/:task_id', TaskController.update);

export default routes;
