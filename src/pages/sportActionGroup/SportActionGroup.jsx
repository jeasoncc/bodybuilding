import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import Divider from '@material-ui/core/Divider';
import { Observable } from 'rxjs';
import { getMuclePart, getMuclePartActionGroup } from 'fetch/user/actionSelect';
import { useState, useEffect } from 'react';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';

// const onSubscribe = observer => {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
// };
// const source$ = new Observable(onSubscribe);
// const theObserver = {
//   next: item => console.log(item),
// };
// source$.subscribe(theObserver);
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '84vh',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  list: {
    width: '35%',
    height: '100%',
    overflowY: 'scroll',
  },
  contentList: {
    width: '65%',
    height: '100%',
    overflowY: 'scroll',
  },
  actionSelect: {
    // width: '100%',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export default function FolderList() {
  const classes = useStyles();
  let arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(i);
  }
  const [muclePart, setMuclePart] = useState([]);
  const [actionGroup, setActionGroup] = useState([]);
  useEffect(() => {
    getMuclePart().then(res => setMuclePart(res));
  }, []);
  return (
    <Box className={classes.root} boxShadow={0}>
      <Box className={classes.list} boxShadow={0} component={List}>
        {muclePart.map((current, index) => (
          <React.Fragment key={current.id}>
            <ListItem
              button
              key={current.id}
              onClick={() => {
                getMuclePartActionGroup({
                  muclePart: current.mucle_part,
                }).then(res => {
                  setActionGroup(res);
                });
              }}
            >
              <Fade in={!!current.id}>
                {/* <ListItemText primary={current.mucle_part}  /> */}
                <Chip
                  color="primary"
                  variant="outlined"
                  label={current.mucle_part}
                  size="small"
                  // deleteIcon={<DoneIcon />}
                  avatar={<Avatar>{current.mucle_part.charAt(0)}</Avatar>}
                />
              </Fade>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </Box>
      <Box className={classes.contentList} boxShadow={0} component={List}>
        {actionGroup.map((current, index) => (
          <ListItem key={current.id}>
            <Grow
              in={!!current.id}
              style={{ transformOrigin: '0 0 0' }}
              {...(!!current.id ? { timeout: 1000 } : {})}
            >
              <Chip
                color="primary"
                className={classes.actionSelect}
                variant="outlined"
                label={current.action}
                deleteIcon={<DoneIcon />}
                onDelete={() => {
                  console.log(1);
                }}
              />
            </Grow>
          </ListItem>
        ))}
      </Box>
    </Box>
  );
}
