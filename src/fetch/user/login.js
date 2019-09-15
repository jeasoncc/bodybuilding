import fetchReq from './../common.js';
/**
 * description 登录
 *
 */
export var login = obj => {
  console.log(obj);
  return fetchReq('/login', obj);
};

/**
 * description 注册
 *
 */
export var register = () => fetchReq('/register');

// login().then(res => console.log(res))
// fetchReq('/login').then(res => console.log(res));
