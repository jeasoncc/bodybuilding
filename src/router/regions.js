export default () => {
  return [
    {
      path: '/login',
      name: 'login',
      compontent: require('pages/login/login')
    },
    {
      path: '/register',
      name: 'register',
      compontent: require('pages/register/Register')
    },
    {
      path: '/error',
      name: '404',
      compontent: require('pages/error/Error')
    }
  ];
};
