import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

const useStyles = makeStyles(theme => ({
  success: {
    background: green[600],
  },
}));
export default function DirectionSnackbar(props) {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);
  const classes = useStyles();
  const handleClick = Transition => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button onClick={handleClick(TransitionLeft)}>Right</Button> */}
      {/* <Button onClick={handleClick(TransitionUp)}>Up</Button> */}
      {/* <Button onClick={handleClick()}>Left</Button> */}
      {/* <Button onClick={handleClick(TransitionDown)}>Down</Button> */}
      <Snackbar
        open={props.open}
        onClose={handleClose}
        TransitionComponent={TransitionLeft}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">添加成功</span>}
      />
    </div>
  );
}
