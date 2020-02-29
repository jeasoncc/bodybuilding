import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles(theme => ({
  root: {
  },
  container: {
  },
  paper: {
  },
  svg: {
  },
  polygon: {
  },
}));

export default function SimpleCollapse() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  return (
    <div >
<Switch checked={checked} onChange={handleChange} />
        <Collapse in={checked}>
          <Paper elevation={4} >
              123
          </Paper>
        </Collapse>
    </div>
  );
}

