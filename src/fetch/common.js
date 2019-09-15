import { fetch as fetchPloyfill } from 'whatwg-fetch';
import qs from 'qs';
const commonUrl = 'http://localhost:7001';
/*
 * Note:async函数返回的是promise对象
 */

var fetchReq = async (url, obj) => {
  let myJson = await fetch(`${commonUrl}${url}`, {
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    body: JSON.stringify(obj)
    // mode: 'cors', // no-cors, cors, *same-origin
    // redirect: 'follow', // manual, *follow, error
    // referrer: 'no-referrer', // *client, no-referrer
  })
    .then(res => res.clone().json())
    .then(json => json)
    .catch(err => console.log(err));
  return myJson;
};
export default fetchReq;
