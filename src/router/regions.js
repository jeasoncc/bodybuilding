import ErrorPage from 'pages/error/Error.jsx';
import Login from 'pages/login/login.jsx';
import Register from 'pages/register/Register.jsx';
import Home from 'pages/home/Home.jsx';
import SportActionGroup from 'pages/sportActionGroup/SportActionGroupRedux';
import MyChoiceAction from 'pages/sportActionGroup/MyChoiceActionRedux';

export default () => {
  return [
    {
      path: '/login',
      name: 'login',
      component: Login,
      layout: '',
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      layout: '',
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      layout: '',
    },
    {
      path: '/error',
      name: '404',
      component: ErrorPage,
      layout: '404',
    },
    {
      path: '/sportactiongroup',
      name: 'sportactiongrou',
      component: SportActionGroup,
      layout: 'includeNavigation',
    },
    {
      path: '/mychoiceaction',
      name: 'mychoiceaction',
      component: MyChoiceAction,
      layout: 'includeNavigation',
    },

    // {
    // path: '/sportdatachart',
    // name: 'sportdatachar',
    // component: () => import('pages/sportDataChart/sportDataChart.jsx')
    // }
  ];
};
