import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      color: theme.palette.primary,
      flexGrow: 1,
      zIndex: 10
    },
    menuButton: {
      marginRight: '1vw',
      color: theme.palette.secondary.light
    },
    title: {
      flexGrow: 1,
    },
    
}));

export default function NavBar() {
  const classes = useStyles();
  
  return (
    <ThemeProvider theme>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
             
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
    
  );
}
