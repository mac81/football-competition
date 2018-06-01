import fetch from 'node-fetch';

export default (url, options = {}, next) => {
  options.credentials = options.credentials || 'same-origin';
  // options.headers = {
  //   'Content-Type': 'application/json',
  //   ...options.headers,
  // };

  return fetch(url, options).then(response => {
    const contentType = response.headers.get('content-type') || '';
    return (contentType.includes('application/json') ? response.json() : response.text()).then(data => {
      if (response.ok) {
        return data;
      } else {
        if (response.status === 401) {
          console.log('401');
          next();
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
