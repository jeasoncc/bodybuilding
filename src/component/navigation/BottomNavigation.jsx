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
import Badge from '@material-ui/core/Badge';
const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: '0',
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('sportactiongroup');

  function handleChange(event, newValue) {
    console.log(1234);
    setValue(newValue);
  }

  return (
    <BottomNavigation value={value} showLabels onChange={handleChange} className={classes.root}>
      <BottomNavigationAction
        label="训练动作"
        value="sportactiongroup"
        component={Link}
        to="/main/sportactiongroup"
        icon={<FitnessCenterIcon />}
      />
      <BottomNavigationAction
        label="今日计划"
        component={Link}
        to="/main/mychoiceaction"
        value="mychoiceaction"
        icon={<SportsHandballIcon />}
      />
      <BottomNavigationAction
        label="运动曲线"
        component={Link}
        to="/main/sportdatachart"
        value="sportdatachart"
        icon={<MultilineChartIcon />}
      />
      />
    </BottomNavigation>
  );
}
