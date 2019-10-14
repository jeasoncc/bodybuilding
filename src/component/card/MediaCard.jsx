import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles(theme => ({
  card: {
    margin: 'auto',
    marginBottom: '10px',
    position: 'relative',
  },
  media: {
    height: 140,
  },
  fab: {
    margin: theme.spacing(1),
    position: 'absolute',
    top: '1px',
    right: '10px',
  },
}));

export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.obj.actionObj.mucle_part}
        </Typography>
        <IconButton
          color="secondary"
          onClick={() => {
            props.deleteAction(props.obj);
          }}
          className={classes.fab}
          aria-label="delete"
        >
          <HighlightOffIcon />
        </IconButton>
        <br />
        <Typography variant="body2" color="textSecondary" component="p">
          {props.obj.actionObj.action}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" disabled color="primary">
          {props.obj.numGroup}组
        </Button>
        <Button size="small" disabled color="primary">
          {props.obj.kilo}kg
        </Button>
      </CardActions>
    </Card>
  );
}
