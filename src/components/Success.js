import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
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
  button: {
    margin: 15
  }
}))

export default function Success(props) {
  const classes = useStyles();

  const back_ = event => {
    event.preventDefault();
    props.prevStep();
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
            Enter Personal Details
          </Typography>
        </Toolbar>
      </AppBar>

      <h1>Thank you for your submission!</h1>
      <p>You will get an email with further instructions</p>

      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={back_}
      >Back</Button>
    </Fragment>
  )
}
