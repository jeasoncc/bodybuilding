import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import TimelineIcon from '@material-ui/icons/Timeline';
import SnackBar from 'component/snackbar/SnackBar';
import store from 'redux/stors/MyChoiceActionStore';
// import MySnackbarContentWrapper from 'component/snackbar/MySnackbarContentWrapper'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);
  const [addSuccess, setAddSuccess] = React.useState(false);
  const [numGroup, setNumGroup] = React.useState('');
  const [kilo, setKilo] = React.useState('');
  const actionObj = props.cur;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const clickF = props;
  const toggleSnack = async () => {
    await setTimeout(() => {
      setAddSuccess(true);
    }, 100);
    await setTimeout(() => {
      setAddSuccess(false);
    }, 500);
    await setTimeout(() => {
      handleClose();
    }, 1001);
  };

  const clickInSure = () => {
    console.log(`numGroup=${numGroup}`);
    console.log(`kilo=${kilo}`);
    clickF.pushMyChoiceActionObj(numGroup, kilo, actionObj);
    toggleSnack();
    console.log(props);
    console.log(store.getState());
    // props.pushMyChoiceActionObj
  };
  return (
    <div>
      <Grow
        in={!!props.cur.id}
        style={{ transformOrigin: '0 0 0' }}
        {...(!!props.cur.id ? { timeout: 1000 } : {})}
      >
        <Chip
          color="primary"
          onClick={handleClickOpen}
          variant="outlined"
          label={props.cur.action}
        />
      </Grow>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{''}</DialogTitle>
        <DialogContent>
          <DialogContentText>请输入您要运动的组数和重量</DialogContentText>
          <form>
            <TextField
              label="组数"
              type="number"
              max="10"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ShowChartIcon />
                  </InputAdornment>
                ),
                endAdornment: <InputAdornment position="end">组</InputAdornment>,
              }}
              onChange={e => {
                setNumGroup(e.target.value);
              }}
            />
            <TextField
              label="重量"
              type="number"
              onChange={e => {
                setKilo(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TimelineIcon />
                  </InputAdornment>
                ),
                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            取消
          </Button>
          <Button onClick={clickInSure} color="primary">
            确定
          </Button>
          <SnackBar open={addSuccess} />
        </DialogActions>
      </Dialog>
    </div>
  );
}
