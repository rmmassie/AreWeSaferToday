import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import { alpha, makeStyles } from '@material-ui/core/styles';
import NavBar from './components/navBar'
import MainContainer from './components/MainContainer.jsx'


const useStyles = makeStyles(() => ({
  root: {
      color: theme.palette.primary,
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing,
    },
    title: {
      flexGrow: 1,
    },
    
}));



function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        {/* <div className={classes.root}> */}

          {/* Nav Bar */}
            <NavBar />
            <MainContainer />

           
          {/* Summary */}

          {/*  Video */}
          {/* Sponsor/Donate */}
          {/* Team */}
          {/* contact/footer */}
        {/* </div> */}
      </CssBaseline>
    </ThemeProvider>
 
  );
}

export default App;
