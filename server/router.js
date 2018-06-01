import express from 'express';
import authenticationRoutes from './api/authentication/authentication-routes';
import leagueRoutes from './api/league/league-routes';
import fixtureRoutes from './api/fixture/fixture-routes';
import seasonRoutes from './api/season/season-routes';
import stagesRoutes from './api/stages/stages-routes';

export default server => {
  // Initializing route groups
  const apiRoutes = express.Router();

  // Set url for API group routes
  server.use('/api', apiRoutes);

  apiRoutes.use('/authentication', authenticationRoutes);
  apiRoutes.use('/leagues', leagueRoutes);
  apiRoutes.use('/fixtures', fixtureRoutes);
  apiRoutes.use('/seasons', seasonRoutes);
  apiRoutes.use('/stages', stagesRoutes);
};
