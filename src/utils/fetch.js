import fetch from 'isomorphic-fetch';
import {history} from '../store';
//import createUrl from './url';

export default (url, options = {}) => {
  const token = sessionStorage.getItem('token');
  options.credentials = options.credentials || 'same-origin';
  options.headers = {
    'Content-Type': 'application/json',
    'x-access-token': token,
    ...options.headers,
  };

  return fetch(url, options).then(response => {
    const contentType = response.headers.get('content-type') || '';
    return (contentType.includes('application/json') ? response.json() : response.text()).then(data => {
      if (response.ok) {
        return data;
      } else {
        if (!url.startsWith('/login') && response.status === 401) {
          // const {pathname, search, hash} = window.location;
          // history.push(createUrl('/login', {error: 'notLoggedIn', back: pathname + search + hash}));
          history.push('/login');
        } else {
          return Promise.reject(
            Error({
              body: data,
              status: response.status,
              statusText: response.statusText,
            })
          );
        }
      }
    });
  });
};
