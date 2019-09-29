import fetchReq from './../common.js';
/**
 * descriptiona 运动部位
 *
 */
export var getMuclePart = () =>
  fetchReq({
    url: '/muclepart',
    method: 'POST',
  });

/**
 * descriptiona 运动部位
 *
 */
export var getMuclePartActionGroup = data =>
  fetchReq({
    url: '/actiongroups',
    method: 'POST',
    data: data,
  });
