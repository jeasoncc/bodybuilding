import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Regions from 'router/regions.js';
import IncludeNavigation from 'layout/IncludeNavigation';

// import SportDataChart from 'pages/sportDataChart/SportDataChart'
function App() {
  const regions = Regions();
  const getMainPagesFromRegions = (params, arr) => {
    let getPages = arr.filter((current, index) => {
      if (current.layout === params) {
        return current;
      }
    });
    return getPages;
  };
  return (
    <Router>
      <Switch>
        <Route
          path="/main"
          render={props => (
            <IncludeNavigation
              components={getMainPagesFromRegions('includeNavigation', regions)}
              {...props}
            />
          )}
        />

        {regions.map((current, index) => {
          if (current.layout === '404') {
            return <Route component={current.component} key={index} />;
          } else if (current.layout === '') {
            return <Route path={current.path} key={index} component={current.component} />;
          }
        })}
        {/* when none of the above match, <NoMatch> will be rendered */}
      </Switch>
    </Router>
  );
}

export default App;
