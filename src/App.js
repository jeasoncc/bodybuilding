import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Error from './pages/error/Error.jsx';
import Login from './pages/login/login.jsx';
import Register from './pages/register/Register.jsx';
import Home from './pages/home/Home.jsx';
import Regions from 'router/regions.js';
import SportActionGroup from 'pages/sportActionGroup/SportActionGroup';
// import SportDataChart from 'pages/sportDataChart/SportDataChart'
function App() {
  const regions = Regions();
  return (
    <Router>
      <Switch>
        <Route path="/sportactiongroup" component={SportActionGroup} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />

        <Route path="/register" component={Register} />
        {/* when none of the above match, <NoMatch> will be rendered */}
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
