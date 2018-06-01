import fetch from 'node-fetch';
import {config} from '../../config';

export const getSeasons = async (req, res, next) => {
  const {apiRoot, accessToken} = config;
  const leagueId = req.params.id;

  fetch(`${apiRoot}/leagues/${leagueId}/seasons?access_token=${accessToken}`)
    .then(res => {
      console.log(res.status);
      return res.json();
    })
    .then(json => {
      return res.status(200).json({
        payload: json.docs,
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const getLatestSeasons = async (req, res, next) => {
  const {apiRoot, accessToken} = config;
  const leagueIds = [8, 82];

  const seasons = await Promise.all(
    leagueIds.map(id => {
      return fetch(`${apiRoot}/leagues/${id}/seasons?access_token=${accessToken}`)
        .then(res => res.json())
        .then(json => json.docs.find(season => season.is_last_season));
    })
  );

  return res.status(200).json({
    payload: seasons,
  });
};

export const getSeason = async (req, res, next) => {
  const {apiRoot, accessToken} = config;
  const seasonId = req.params.id;

  fetch(`${apiRoot}/seasons/${seasonId}/?access_token=${accessToken}`)
    .then(res => {
      console.log(res.status);
      return res.json();
    })
    .then(json => {
      return res.status(200).json({
        payload: json.docs,
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const getSeasonStages = (req, res, next) => {
  const {apiRoot, accessToken} = config;
  const seasonId = req.params.id;

  fetch(`${apiRoot}/seasons/${seasonId}/stages?access_token=${accessToken}`)
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

export const getSeasonFixtures = async (req, res, next) => {
  const {apiRoot, accessToken} = config;
  const seasonId = req.params.id;
  let page = 1;
  let pages = 2;
  let fixtures = [];

  while (page <= pages) {
    const result = await fetch(`${apiRoot}/seasons/${seasonId}/fixtures?page=${page}&access_token=${accessToken}`)
      .then(result => {
        if (result.status === 401) {
          return res.status(401).json({
            message: 'Unauthorized',
          });
        }
        return result.json();
      })
      .then(json => {
        page = Number(json.pagination.page) + 1;
        pages = json.pagination.pages;
        return json.docs;
      });
    fixtures = [...fixtures, ...result];
  }

  return res.status(200).json({
    payload: fixtures.sort((a, b) => {
      return new Date(a.schedule_date) - new Date(b.schedule_date);
    }),
  });
};
