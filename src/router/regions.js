export default () => {
  return [
    {
      path: '/login',
      name: 'login',
      component: () => import('pages/login/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('pages/register/Register')
    },
    {
      path: '/error',
      name: '404',
      component: () => import('pages/error/Error')
    },
    {
      path: '/sportactiongroup',
      name: 'sportactiongrou',
      component: () => import('pages/sportActionGroup/SportActionGroup.jsx')
    },
    {
      path: '/sportdatachart',
      name: 'sportdatachar',
      component: () => import('pages/sportDataChart/sportDataChart.jsx')
    }
  ];
};
