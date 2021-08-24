import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'

import NavBar from './components/navBar'
import MainContainer from './components/MainContainer.jsx'


function App() {
  
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
