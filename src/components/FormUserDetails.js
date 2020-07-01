import React, {Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  textField: {
    width: '250px'
  },
  button: {
    margin: 15
  }
}))

export default function FormUserDetails(props) {
  const classes = useStyles();
  const { values, changeHandler } = props;

  const continue_ = event => {
    event.preventDefault();
    props.nextStep();
  }

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Enter User Details
          </Typography>
        </Toolbar>
      </AppBar>

      <br />
      <br />
      <TextField
        label="First Name"
        placeholder="Enter Your First Name"
        className={classes.textField}
        value={values.firstName}
        onChange={changeHandler('firstName')}
      />

      <br />
      <br />
      <TextField
        label="Last Name"
        placeholder="Enter Your Last Name"
        className={classes.textField}
        value={values.lastName}
        onChange={changeHandler('lastName')}
      />

      <br />
      <br />
      <TextField
        label="Email"
        placeholder="Enter Your Email"
        className={classes.textField}
        value={values.email}
        onChange={changeHandler('email')}
      />

      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={continue_}
      >Continue</Button>
    </Fragment>
  )
}
