import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
  },
  list: {
    width: '100%',
    maxWidth: 360,
    margin: '0 auto',
    backgroundColor: theme.palette.background.paper,
  }
}))

export default function Confirm(props) {
  const classes = useStyles();
  const { values } = props;

  const continue_ = event => {
    event.preventDefault();

    // Process Form
    // ...

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
      <List className={classes.list}>
        <ListItem>
          <ListItemText
            primary="First Name"
            secondary={values.firstName}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary="Last Name"
            secondary={values.lastName}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary="Email"
            secondary={values.email}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary="Occupation"
            secondary={values.occupation}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary="City"
            secondary={values.city}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary="Bio"
            secondary={values.bio}
          />
        </ListItem>
      </List>

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={continue_}
      >Confirm & Continue</Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={back_}
      >Back</Button>
    </Fragment>
  )
}
