import fetchReq from './../common.js';
/**
 * descriptiona 运动部位
 *
 */
export var getMuclePart = () =>
  fetchReq({
    url: '/actiongroup',
    method: 'POST',
  });
