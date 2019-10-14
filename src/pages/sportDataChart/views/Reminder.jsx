import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textLinks: {
    padding: '0 24px 6px 24px',
  },
}));
export default function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}> */}
      {/*   Open form dialog */}
      {/* </Button> */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">订阅</DialogTitle>
        <DialogContent>
          <DialogContentText>
            检测到您尚未登录，如果您希望使用此功能需要登录以记录您的运动。
          </DialogContentText>
          <TextField autoFocus margin="dense" id="name" label="邮箱地址" type="email" fullWidth />
          <TextField margin="dense" label="密码" type="password" fullWidth />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            取消
          </Button>
          <Button onClick={handleClose} color="primary">
            注册
          </Button>
        </DialogActions>
        {/* <Grid container className={classes.textLinks} xs={12}> */}
        {/*     <Grid item xs> */}
        {/*       <Link href="#" variant="body2" color="textSecondary"> */}
        {/*         忘记密码? */}
        {/*       </Link> */}
        {/*     </Grid> */}
        {/*     <Grid item> */}
        {/*       <Link component={RouterLink} color="textSecondary" to="/register" variant="body2"> */}
        {/*         {"已有帐号，请登录"} */}
        {/*       </Link> */}
        {/*     </Grid> */}
        {/*   </Grid> */}
      </Dialog>
    </div>
  );
}
