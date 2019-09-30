import fetchReq from './../common.js';
/**
 * description 登录
 *
 */
export var login = obj => fetchReq('/login', obj);

/**
 * description 注册
 *
 */
export var register = obj => fetchReq('/register', obj);

// login().then(res => console.log(res))
// fetchReq('/login').then(res => console.log(res));
