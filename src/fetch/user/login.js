import fetchReq from './../common.js';
/**
 * description 登录
 *
 */
export var login = () => fetchReq('/login');

/**
 * description 注册
 *
 */
export var register = () => fetchReq('/register');

// login().then(res => console.log(res))
// fetchReq('/login').then(res => console.log(res));
