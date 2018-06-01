import fetch from 'node-fetch';
import {config} from '../../config';

export const getStage = (req, res, next) => {
  const {apiRoot, accessToken} = config;
  const stageId = req.params.id;

  fetch(`${apiRoot}/stages/${stageId}?access_token=${accessToken}`)
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

// export const getStagesWithStanding = (req, res, next) => {
//   const {apiRoot, accessToken} = config;
//   const seasonId = req.params.id;

//   fetch(`${apiRoot}/seasons/${seasonId}/stages?populate=fixtures&access_token=${accessToken}`)
//     .then(res => res.json())
//     .then(json => {
//       return res.status(200).json({
//         payload: json.docs.filter(item => item.standing),
//       });
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };
