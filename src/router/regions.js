import ErrorPage from 'pages/error/Error.jsx';
import Login from 'pages/login/login.jsx';
import Register from 'pages/register/Register.jsx';
import Home from 'pages/home/Home.jsx';
import SportActionGroup from 'pages/sportActionGroup/SportActionGroup';
export default () => {
  return [
    {
      path: '/login',
      name: 'login',
      component: Login,
      layout: ''
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      layout: ''
    },
    {
      path: '/error',
      name: '404',
      component: ErrorPage,
      layout: '404'
    },
    {
      path: '/sportactiongroup',
      name: 'sportactiongrou',
      component: SportActionGroup,
      layout: 'includeNavigation'
    }
    // {
    // path: '/sportdatachart',
    // name: 'sportdatachar',
    // component: () => import('pages/sportDataChart/sportDataChart.jsx')
    // }
  ];
};
