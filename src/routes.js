import { Router } from 'express';

import ServiceController from './app/controllers/ServiceController';
import LogController from './app/controllers/LogController';
import logRequestsMiddleware from './app/middlewares/logRequests';

const routes = new Router();

routes.use(logRequestsMiddleware);

routes.get('/services', ServiceController.index);

routes.get('/logs', LogController.index);

export default routes;
