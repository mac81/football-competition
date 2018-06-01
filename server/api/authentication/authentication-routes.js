import express from 'express';
import * as AuthenticationController from './authentication-controller';
import VerifyToken from '../../verifyToken';

const authenticationRoutes = express.Router();

authenticationRoutes.post('/register', AuthenticationController.register);
authenticationRoutes.post('/login', AuthenticationController.login);
authenticationRoutes.get('/updateToken', AuthenticationController.updateToken);
authenticationRoutes.put('/prediction', VerifyToken, AuthenticationController.setPrediction);
authenticationRoutes.get('/predictions', VerifyToken, AuthenticationController.getUserPredictions);

export default authenticationRoutes;
