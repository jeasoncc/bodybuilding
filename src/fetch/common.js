import { fetch as fetchPloyfill } from 'whatwg-fetch';
const commonUrl = 'http://localhost:7001';
/*
 * Note:async函数返回的是promise对象
 */
var fetchReq = async ({ url, method = 'POST', data = {}, header = {} } = {}) => {
  if (method === 'GET') {
    return fetch(commonUrl + url)
      .then(res => res.clone().json())
      .then(json => json);
  }

  if (method === 'POST') {
    return fetch(commonUrl + url, {
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(res => res.clone().json())
      .then(json => json);
  }
};

// var bbb = fetchReq2({
//     url: '/actiongroup',
//     method: 'GET'
// }).then(res => {
//     console.log(`res=${JSON.stringify(res)}`)
// })
// console.log(`bbb=${bbb}`)
// fetchReq2({
//     url: '/finduser',
// }).then(res => console.log(JSON.stringify(res)))

// var fetchReq = async (url, obj) => {
//   return  fetch(`${commonUrl}${url}`, {
//     headers: {
//       'content-type': 'application/json'
//     },
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     body: JSON.stringify(obj)
//     // mode: 'cors', // no-cors, cors, *same-origin
//     // redirect: 'follow', // manual, *follow, error
//     // referrer: 'no-referrer', // *client, no-referrer
//   })
//     .then(res => res.clone().json())
//     .then(json => json)
//     .catch(err => console.log(err));
// };
export default fetchReq;
