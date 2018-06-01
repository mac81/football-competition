import express from 'express';
import * as SeasonController from './season-controller';
import VerifyToken from '../../verifyToken';

const routes = express.Router();

routes.get('/', VerifyToken, SeasonController.getSeasons);
routes.get('/latest', VerifyToken, SeasonController.getLatestSeasons);
routes.get('/:id', VerifyToken, SeasonController.getSeason);
routes.get('/:id/stages', VerifyToken, SeasonController.getSeasonStages);
routes.get('/:id/fixtures', VerifyToken, SeasonController.getSeasonFixtures);

export default routes;
