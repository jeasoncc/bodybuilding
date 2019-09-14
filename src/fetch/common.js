import { fetch as fetchPloyfill } from 'whatwg-fetch';

const commonUrl = 'http://localhost:7001';
/*
 * Note:async函数返回的是promise对象
 */
const HEADER = {
  headers: {
    'content-type': 'application/json'
  },
  method: 'POST' // *GET, POST, PUT, DELETE, etc.
  // mode: 'cors', // no-cors, cors, *same-origin
  // redirect: 'follow', // manual, *follow, error
  // referrer: 'no-referrer', // *client, no-referrer
};

var fetchReq = async url => {
  let myJson = await fetch(`${commonUrl}${url}`, HEADER)
    .then(res => res.clone().json())
    .then(json => {
      return json;
    })
    .catch(err => console.log(err));
  return myJson;
};
export default fetchReq;
