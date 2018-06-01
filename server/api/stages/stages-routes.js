import express from 'express';
import VerifyToken from '../../verifyToken';
import * as StagesController from './stages-controller';

const routes = express.Router();

routes.get('/:id', VerifyToken, StagesController.getStage);

export default routes;
