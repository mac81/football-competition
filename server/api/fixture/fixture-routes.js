import express from 'express';
import * as FixtureController from './fixture-controller';

const fixtureRoutes = express.Router();

fixtureRoutes.get('/', FixtureController.getFixtures);
fixtureRoutes.get('/standings', FixtureController.getStandings);

export default fixtureRoutes;
