import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BottomNavigation from 'component/navigation/BottomNavigation';
import Toobar from 'component/navigation/Toobar';
import { Route, Switch } from 'react-router-dom';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import Grow from '@material-ui/core/Grow';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    height: '87vh',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  grid: {
    height: '100%',
  },
}));

export default function Album(props) {
  const classes = useStyles();
  const regions = props.components;
  return (
    <React.Fragment>
      <CssBaseline />
      <Toobar />
      <main>
        {/* Hero unit */}
        <Container className={classes.cardGrid} maxWidth={false}>
          {/* End hero unit */}
          <Grid className={classes.grid} container spacing={4}>
            <Switch>
              {regions.map((current, index) => {
                return (
                  <Route path={'/main' + current.path} key={index} component={current.component} />
                );
              })}
            </Switch>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <BottomNavigation />
      {/* End footer */}
    </React.Fragment>
  );
}
