import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import img1 from 'asserts/imgs/home.jpg';
import img2 from 'asserts/imgs/home2.jpg';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import { Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${img1})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  image2: {
    backgroundImage: `url(${img2})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(31),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Home(prop) {
  const classes = useStyles();

  const ClickFn = () => {
    return prop.toggleShow()
  }
  return (
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            <div className="texty-demo" style={{ marginTop: 64 }}>
              <Texty>欢迎回来</Texty>
            </div>
          </Typography>
          <form  className={classes.form} noValidate>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              component={RouterLink}
              to="/main/sportactiongroup"
            >
                <span>直接开始!</span> 
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={ClickFn}
            >
                <span>我要登陆!</span> 
            </Button>
          </form>
        </div>
  );
}
