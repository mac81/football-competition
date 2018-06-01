import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import fetch from 'node-fetch';
import User from './authentication-model';
//import {Prediction} from './authentication-model';
import {config} from '../../config';

function jwtSign(user) {
  return jwt.sign({id: user._id}, config.secret, {
    expiresIn: 86400, // expires in 24 hours
  });
}

//========================================
// Login
//========================================
export const login = (req, res, next) => {
  User.findOne({email: req.body.email}, (err, user) => {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send({message: 'No user found.'});

    // check if the password is valid
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({auth: false, token: null});

    // if user is found and password is valid
    // create a token
    var token = jwtSign(user);

    // return the information including token as JSON
    res.status(200).send({payload: {auth: true, token: token}});
  });
};

//========================================
// Register
//========================================
export const register = (req, res, next) => {
  // Check for registration errors
  const email = req.body.email;
  const password = req.body.password;

  // Return error if no email provided
  if (!email) {
    res.status(422).send({error: 'You must enter an email address.'});
  }

  // Return error if no password provided
  if (!password) {
    res.status(422).send({error: 'You must enter a password.'});
  }

  const hashedPassword = bcrypt.hashSync(password, 8);

  User.create(
    {
      email: email,
      password: hashedPassword,
    },
    function(err, user) {
      if (err) return res.status(500).send('There was a problem registering the user`.');

      // if user is registered without errors
      // create a token
      const token = jwtSign(user);

      res.status(200).send({auth: true, token: token});
    }
  );
};

// export const getUser = (req, res, next) => {
//   User.findById(req.userId, {password: 0}, function(err, user) {
//     if (err) return res.status(500).send('There was a problem finding the user.');
//     if (!user) return res.status(404).send('No user found.');
//     res.status(200).send(user);
//   });
// };

export const getPredictions = (req, res, next) => {
  User.find({})
    .populate('bets')
    .exec(function(err, users) {
      res.status(200).send(users);
    });
  // User.find({}, {password: 0}, function(err, users) {
  //   if (err) return res.status(500).send('There was a problem finding the user.');
  //   if (!users) return res.status(404).send('No users found.');
  //   res.status(200).send(users);
  // });
};

export const updateToken = (req, res, next) => {
  const {apiRoot, refreshToken} = config;

  fetch(`${apiRoot}/accessToken?refresh_token=${refreshToken}`)
    .then(res => res.json())
    .then(json => {
      return res.status(200).json({
        payload: json,
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const setPrediction = (req, res, next) => {
  const {apiRoot, refreshToken} = config;

  const {matchId, homeScorePrediction, awayScorePrediction} = req.body;

  User.findOne({_id: req.userId, 'predictions.matchId': matchId}).exec(function(err, user) {
    if (err) {
      if (err) return res.status(500).send({payload: err});
    }

    // update prediction if it exists
    if (user) {
      User.update(
        {_id: req.userId, 'predictions.matchId': matchId},
        {$set: {'predictions.$': {matchId, homeScorePrediction, awayScorePrediction}}},
        {new: true},
        function(err, user) {
          if (err) return res.status(500).send({payload: err});
          return res.status(200).send({payload: {message: 'Success'}});
        }
      );
    }

    // add prediction if it doesn't exist
    else {
      User.findByIdAndUpdate(
        req.userId,
        {$push: {predictions: {matchId, homeScorePrediction, awayScorePrediction}}},
        {new: true},
        function(err, user) {
          if (err) return res.status(500).send({payload: err});
          return res.status(200).send({payload: {message: 'Success'}});
        }
      );
    }
  });
};

export const getUserPredictions = (req, res, next) => {
  User.findById(req.userId, (err, user) => {
    res.status(200).send({payload: user.predictions});
  });
};
