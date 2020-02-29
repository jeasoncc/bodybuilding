import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ArrowBack from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import Alert from '@material-ui/lab/Alert';
const styles = {
  backBtn: {
    margin: "2rem 1rem"
  },
  input: {
    marginTop: "2rem"
  },
  form: {
    width: "100%",
    display: "flex",
    flexFlow: "column",
    padding: "1rem"
  },
loginBtn: {
    marginTop: "16rem"
}
};
function Login(props) {
        const { classes } = props;
        const [open, setOpen] = React.useState(false)
         const [state, setState] = React.useState({
            vertical: 'top',
            horizontal: 'center',
          });

  const { vertical, horizontal, } = state;
        const handleClose =() => {
            console.log(123)
            setOpen(false)
        }
        const loginFn = () => {
            console.log(123)
            setOpen(true)
            open?setOpen(false): setOpen(true)
        }
        return(
            <div>
                <Snackbar open={open}  anchorOrigin={{ vertical, horizontal }} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" variant="filled" >
                        This is a success message!
                    </Alert>
                </Snackbar>
                <Button className={classes.backBtn} startIcon={<ArrowBack/>} onClick={props.toggleShow}>Back</Button>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField 
                        variant="outlined"
                        size="small"
                        className={classes.input}
                        color="primary"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                            ),
                        }}
                        label="Email" />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.loginBtn}
                        onClick={loginFn}
                    >
                        <span>Login In!</span> 
                    </Button>
                </form>
            </div>
            )
}
export default withStyles(styles)(Login);
