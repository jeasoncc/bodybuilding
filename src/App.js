import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Error from './pages/error/Error.jsx';
import Login from './pages/login/login.jsx';
import Register from './pages/register/Register.jsx';
import Home from './pages/home/Home.jsx';

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />

        <Route path="/about" component={Register} />
        {/* when none of the above match, <NoMatch> will be rendered */}
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/home">home</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}

export default App;
