import fetch from 'node-fetch';
import {config} from '../../config';

export const getLeague = async (req, res, next) => {
  const {apiRoot, accessToken} = config;
  const leagueId = req.params.id;

  fetch(`${apiRoot}/leagues/${leagueId}?access_token=${accessToken}`)
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

export const getLeagueSeasons = async (req, res, next) => {
  const {apiRoot, accessToken} = config;
  const leagueId = req.params.id;

  fetch(`${apiRoot}/leagues/${leagueId}/seasons?access_token=${accessToken}`)
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

export const getLatestLeagueSeasons = async (req, res, next) => {
  const {apiRoot, accessToken} = config;
  const leagueId = req.params.id;

  fetch(`${apiRoot}/leagues/${leagueId}/seasons?access_token=${accessToken}`)
    .then(res => res.json())
    .then(json => {
      return res.status(200).json({
        payload: json.docs.find(season => season.is_last_season),
      });
    })
    .catch(error => {
      console.log(error);
    });
};
