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

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default function Album(props) {
  const classes = useStyles();
  const regions = props.components;
  console.log(regions);
  return (
    <React.Fragment>
      <CssBaseline />
      <Toobar />
      <main>
        {/* Hero unit */}
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Switch>
              {regions.map((current, index) => (
                <Route
                  path={'/main' + current.path}
                  key={index}
                  component={current.component}
                />
              ))}
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
