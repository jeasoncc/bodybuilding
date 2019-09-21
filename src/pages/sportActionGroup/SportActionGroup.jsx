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

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '84vh',
    backgroundColor: theme.palette.background.paper,
    display: 'flex'
  },
  list: {
    width: '40%',
    height: '100%',
    overflow: 'scroll'
  },
  contentList: {
    width: '60%',
    height: '100%',
    overflow: 'scroll'
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

export default function FolderList() {
  const classes = useStyles();
  let arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(i);
  }
  return (
    <Box className={classes.root} boxShadow={0}>
      <Box className={classes.list} boxShadow={0} component={List}>
        {arr.map(current => (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
        ))}
      </Box>
      <Box className={classes.contentList} boxShadow={0} component={List}>
        {arr.map(current => (
          <ListItem>
            <Chip
              icon={<FaceIcon />}
              variant="outlined"
              size="md"
              label="Basic Chip"
              className={classes.chip}
            />
          </ListItem>
        ))}
      </Box>
    </Box>
  );
}
