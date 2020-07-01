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

export default function FormPersonalDetails(props) {
  const classes = useStyles();
  const { values, changeHandler } = props;

  const continue_ = event => {
    event.preventDefault();
    props.nextStep();
  }

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

      <br />
      <br />
      <TextField
        label="Occupation"
        placeholder="Enter Your Occupation"
        className={classes.textField}
        value={values.occupation}
        onChange={changeHandler('occupation')}
      />

      <br />
      <br />
      <TextField
        label="City"
        placeholder="Enter Your City"
        className={classes.textField}
        value={values.city}
        onChange={changeHandler('city')}
      />

      <br />
      <br />
      <TextField
        label="Bio"
        placeholder="Enter Your Bio"
        className={classes.textField}
        value={values.bio}
        onChange={changeHandler('bio')}
      />

      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={continue_}
      >Continue</Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={back_}
      >Back</Button>
    </Fragment>
  )
}
