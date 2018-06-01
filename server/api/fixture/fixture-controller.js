import fetch from 'node-fetch';
import {config} from '../../config';

export const getFixtures = (req, res, next) => {
  const {apiRoot, accessToken} = config;
  const seasonId = req.params.id;

  fetch(`${apiRoot}/seasons/${seasonId}/fixtures/?access_token=${accessToken}`)
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

export const getStandings = (req, res, next) => {
  const {apiRoot, accessToken} = config;

  fetch(`${apiRoot}/stages/1/standing?access_token=${accessToken}`)
    .then(res => res.json())
    .then(json => {
      return res.status(200).json({
        payload: json.docs,
      });
    })
    .catch(error => {
      console.log(error);
    });
};
