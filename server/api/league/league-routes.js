import express from 'express';
import * as LeagueController from './league-controller';

const routes = express.Router();

//routes.get('/', LeagueController.getLeagues);
routes.get('/:id', LeagueController.getLeague);
routes.get('/:id/seasons', LeagueController.getLeagueSeasons);
//routes.get('/:id/seasons/latest', LeagueController.getLatestLeagueSeasons);

export default routes;
