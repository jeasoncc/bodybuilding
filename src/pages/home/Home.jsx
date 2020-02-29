import React,{useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import img1 from 'asserts/imgs/home.jpg';
import img2 from 'asserts/imgs/home2.jpg';
import Login from "./component/Login"
import Copyright from "./component/Copyright"
import Index from "./component/Index"
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
  image3: {
    backgroundImage: `url(https://cdn.pixabay.com/photo/2017/02/15/11/05/texture-2068283_1280.jpg)`,
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
}));

export default function Home() {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const changeShow = () => {
    show?setShow(false):setShow(true)
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />

      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        className={classes.image2}
      >
          {show?<Index toggleShow={changeShow}/>:<Login toggleShow={changeShow}/>  }
      </Grid>
    </Grid>
  );
}
