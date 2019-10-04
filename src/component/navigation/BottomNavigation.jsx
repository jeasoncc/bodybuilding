import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import SportsIcon from '@material-ui/icons/Sports';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: '0',
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <BottomNavigation value={value} showLabels onChange={handleChange} className={classes.root}>
      <BottomNavigationAction
        label="训练动作"
        value="recents"
        component={Link}
        to="/main/sportactiongroup"
        icon={<FitnessCenterIcon />}
      />
      <BottomNavigationAction
        label="我的选择"
        component={Link}
        to="/main/mychoiceaction"
        value="favorites"
        icon={<SportsHandballIcon />}
      />
      <BottomNavigationAction label="运动曲线" value="nearby" icon={<MultilineChartIcon />} />
      />
    </BottomNavigation>
  );
}
